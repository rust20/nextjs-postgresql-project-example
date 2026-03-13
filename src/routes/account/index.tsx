import { createFileRoute, redirect } from '@tanstack/react-router'
import AccountProfile from '@/components/organisms/AccountProfile'

export const Route = createFileRoute('/account/')({
  beforeLoad: async ({ context }) => {
    if (!context.session?.user) throw redirect({ to: '/' })
  },
  component: AccountPage,
})

function AccountPage() {
  const { session } = Route.useRouteContext()
  return (
    <>
      <br />
      <br />
      <AccountProfile user={session?.user ?? null} />
    </>
  )
}
