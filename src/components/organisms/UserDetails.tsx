import DetailsToggle from '../molecules/DetailsToggle'

interface UserDetailsProps {
  user: { name?: string | null; email?: string | null } | null
}

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <>
      <br />
      <br />
      <DetailsToggle user={user} />
    </>
  )
}
