'use client'

import UserCard from '../molecules/UserCard'
import Button from '../atoms/Button'
import { useRouter } from '@tanstack/react-router'

interface AccountProfileProps {
  user: { name?: string | null; email?: string | null; image?: string | null } | null
}

export default function AccountProfile({ user }: AccountProfileProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <UserCard name={user?.name} email={user?.email} image={user?.image} />
      <Button variant="secondary" onClick={() => router.history.back()}>
        Go Back
      </Button>
    </div>
  )
}
