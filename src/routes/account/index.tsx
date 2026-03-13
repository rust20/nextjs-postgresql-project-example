import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { auth } from '@/lib/auth'
import AccountProfile from '@/components/organisms/AccountProfile'
import AuthLayout from '@/components/templates/AuthLayout'

const getSession = createServerFn({ method: 'GET' }).handler(async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers })
  return session
})

export const Route = createFileRoute('/account/')({
  beforeLoad: async ({ context }) => {
    const session = await getSession()
    if (!session?.user) throw redirect({ to: '/' })
    return { session }
  },
  loader: ({ context }) => context.session,
  component: AccountPage,
})

function AccountPage() {
  const session = Route.useLoaderData()
  return (
    <>
      <br />
      <br />
      <AccountProfile user={session?.user ?? null} />
    </>
  )
}
