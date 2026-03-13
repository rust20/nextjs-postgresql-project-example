import { createAPIFileRoute } from '@tanstack/start-api-routes'
import { auth } from '@/lib/auth'

export const APIRoute = createAPIFileRoute('/api/auth/$')({
  GET: ({ request }) => auth.handler(request),
  POST: ({ request }) => auth.handler(request),
})
