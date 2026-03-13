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

  if (!user) return <Text variant="label">user is not logged in</Text>

  return (
    <div className="flex flex-col gap-3">
      <Button variant="secondary" onClick={() => setIsHidden((prev) => !prev)}>
        {isHidden ? 'Show Details' : 'Hide Details'}
      </Button>
      {!isHidden && (
        <div className="flex flex-col gap-2">
          {user.name && <Text variant="body">username: {user.name}</Text>}
          {user.email && <Text variant="body">email: {user.email}</Text>}
          <NavLink to="/account">View Account Page</NavLink>
        </div>
      )}
    </div>
  )
}
