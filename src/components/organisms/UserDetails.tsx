import DetailsToggle from '../molecules/DetailsToggle'

interface UserDetailsProps {
  user: { name?: string | null; email?: string | null } | null
}

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className="p-8">
      <DetailsToggle user={user} />
    </div>
  )
}
