import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'

let router: ReturnType<typeof createTanStackRouter> | undefined

export function createRouter() {
  const queryClient = new QueryClient()

  const r = createTanStackRouter({
    routeTree,
    context: {
      queryClient,
      session: null,
    },
    defaultPreload: 'intent',
  })

  return r
}

export function getRouter() {
  if (!router) router = createRouter()
  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
