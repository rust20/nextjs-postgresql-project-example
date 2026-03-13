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
    <>
      <UserCard name={user?.name} email={user?.email} image={user?.image} />

      <br />

      <Button onClick={() => router.history.back()}>Go Back</Button>
    </>
  )
}
