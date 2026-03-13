'use client'

import Button from '../atoms/Button'
import { authClient } from '@/lib/auth-client'

interface AuthButtonProps {
  isLoggedIn: boolean
}

export default function AuthButton({ isLoggedIn }: AuthButtonProps) {
  const handleLogin = () => authClient.signIn.social({ provider: 'google', callbackURL: '/' })
  const handleLogout = () => authClient.signOut({ fetchOptions: { onSuccess: () => window.location.reload() } })

  return isLoggedIn
    ? <Button variant="secondary" onClick={handleLogout}>Logout</Button>
    : <Button variant="primary" onClick={handleLogin}>Login</Button>
}
