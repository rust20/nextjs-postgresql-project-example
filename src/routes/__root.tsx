import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import BaseLayout from '@/components/templates/BaseLayout'

interface RouterContext {
  queryClient: QueryClient
  session: { user: { name?: string | null; email?: string | null; image?: string | null } } | null
}

export const Route = createRootRouteWithContext<RouterContext>()({
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
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <BaseLayout isLoggedIn={!!session?.user}>
          <ScrollRestoration />
          <Outlet />
        </BaseLayout>
        <Scripts />
      </body>
    </html>
  )
}
