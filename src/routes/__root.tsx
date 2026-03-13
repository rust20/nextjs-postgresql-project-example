import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { QueryClient } from '@tanstack/react-query'
import { auth } from '@/lib/auth'
import BaseLayout from '@/components/templates/BaseLayout'

interface RouterContext {
  queryClient: QueryClient
  session: { user: { name?: string | null; email?: string | null; image?: string | null } } | null
}

const getSession = createServerFn({ method: 'GET' }).handler(async ({ request }) => {
  return auth.api.getSession({ headers: request.headers })
})

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async () => {
    const session = await getSession()
    return { session }
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'App' },
    ],
    links: [{ rel: 'stylesheet', href: '/globals.css' }],
  }),
  component: RootComponent,
})

function RootComponent() {
  const { session } = Route.useRouteContext()
  return (
    <html lang="en" style={{ backgroundColor: '#000', color: '#fff' }}>
      <head>
        <HeadContent />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
        <BaseLayout isLoggedIn={!!session?.user}>
          <ScrollRestoration />
          <Outlet />
        </BaseLayout>
        <Scripts />
      </body>
    </html>
  )
}
