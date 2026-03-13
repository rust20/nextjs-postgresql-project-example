'use client'

import Button from '../atoms/Button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from '@tanstack/react-router'

interface AuthButtonProps {
  isLoggedIn: boolean
}

export default function AuthButton({ isLoggedIn }: AuthButtonProps) {
  const router = useRouter()

  const handleLogin = () => authClient.signIn.social({ provider: 'google', callbackURL: '/' })
  const handleLogout = async () => {
    await authClient.signOut()
    await router.invalidate()
  }

  return isLoggedIn
    ? <Button onClick={handleLogout}>Logout</Button>
    : <Button onClick={handleLogin}>Login</Button>
}
