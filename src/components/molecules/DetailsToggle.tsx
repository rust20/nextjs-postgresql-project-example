'use client'

import { useState } from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import NavLink from '../atoms/NavLink'

interface DetailsToggleProps {
  user: { name?: string | null; email?: string | null } | null
}

export default function DetailsToggle({ user }: DetailsToggleProps) {
  const [isHidden, setIsHidden] = useState(true)

  if (!user) return <Text>user is not logged in</Text>

  return (
    <>
      <Button onClick={() => setIsHidden((prev) => !prev)}>
        {isHidden ? 'Show Details' : 'Hide Details'}{' '}
      </Button>

      <br />

      {!isHidden && (
        <>
          <Text>username: {user.name}</Text>
          <Text>email: {user.email}</Text>

          <br />

          <NavLink to="/account">View Account Page</NavLink>
        </>
      )}
    </>
  )
}
