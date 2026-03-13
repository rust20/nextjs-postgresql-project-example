import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { auth } from '@/lib/auth'
import UserDetails from '@/components/organisms/UserDetails'

const getSession = createServerFn({ method: 'GET' }).handler(async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers })
  return session
})

export const Route = createFileRoute('/')({
  loader: async ({ context: { queryClient } }) => {
    return queryClient.fetchQuery({
      queryKey: ['session'],
      queryFn: () => getSession(),
    })
  },
  component: HomePage,
})

function HomePage() {
  const session = Route.useLoaderData()
  return <UserDetails user={session?.user ?? null} />
}
