import { createFileRoute } from '@tanstack/react-router'
import UserDetails from '@/components/organisms/UserDetails'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { session } = Route.useRouteContext()
  return <UserDetails user={session?.user ?? null} />
}
