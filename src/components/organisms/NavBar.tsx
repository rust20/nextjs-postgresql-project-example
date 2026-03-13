import AuthButton from '../molecules/AuthButton'

interface NavBarProps {
  isLoggedIn: boolean
}

export default function NavBar({ isLoggedIn }: NavBarProps) {
  return (
    <nav className="p-4 border-b flex justify-end">
      <AuthButton isLoggedIn={isLoggedIn} />
    </nav>
  )
}
