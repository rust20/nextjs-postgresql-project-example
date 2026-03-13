import { createServer } from 'node:http'
import { createReadStream, existsSync } from 'node:fs'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { betterAuth } from 'better-auth'
import pg from 'pg'
import handler from './dist/server/server.js'

const { Pool } = pg

const auth = betterAuth({
  database: new Pool({ connectionString: process.env.DATABASE_URL }),
  socialProviders: {
    google: {
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    },
  },
})

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const clientDir = join(__dirname, 'dist', 'client')

const MIME = {
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const port = parseInt(process.env.PORT || '3000')
const hostname = process.env.HOSTNAME || '0.0.0.0'

async function nodeReqToFetch(nodeReq, url) {
  const headers = new Headers()
  for (const [key, val] of Object.entries(nodeReq.headers)) {
    if (val) headers.append(key, Array.isArray(val) ? val.join(', ') : val)
  }
  const body = !['GET', 'HEAD'].includes(nodeReq.method ?? '')
    ? await new Promise((resolve, reject) => {
        const chunks = []
        nodeReq.on('data', (c) => chunks.push(c))
        nodeReq.on('end', () => resolve(Buffer.concat(chunks)))
        nodeReq.on('error', reject)
      })
    : undefined
  return new Request(url, { method: nodeReq.method, headers, body })
}

async function sendFetchResponse(response, nodeRes) {
  const resHeaders = {}
  response.headers.forEach((value, key) => { resHeaders[key] = value })
  nodeRes.writeHead(response.status, resHeaders)
  if (response.body) {
    const reader = response.body.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      nodeRes.write(value)
    }
  }
  nodeRes.end()
}

createServer(async (nodeReq, nodeRes) => {
  try {
    const url = `http://${nodeReq.headers.host || `${hostname}:${port}`}${nodeReq.url}`
    const pathname = nodeReq.url.split('?')[0]

    // Serve static files from dist/client/
    const filePath = join(clientDir, pathname)
    if (existsSync(filePath) && !filePath.endsWith('/')) {
      const mime = MIME[extname(filePath)] || 'application/octet-stream'
      nodeRes.writeHead(200, { 'Content-Type': mime })
      createReadStream(filePath).pipe(nodeRes)
      return
    }

    // Better Auth handles /api/auth/*
    if (pathname.startsWith('/api/auth/')) {
      const request = await nodeReqToFetch(nodeReq, url)
      const response = await auth.handler(request)
      await sendFetchResponse(response, nodeRes)
      return
    }

    // Everything else goes to TanStack Start
    const request = await nodeReqToFetch(nodeReq, url)
    const response = await handler.fetch(request)
    await sendFetchResponse(response, nodeRes)
  } catch (err) {
    console.error(err)
    nodeRes.writeHead(500)
    nodeRes.end('Internal Server Error')
  }
}).listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}`)
})
