import AuthButton from '../molecules/AuthButton'

interface NavBarProps {
  isLoggedIn: boolean
}

export default function NavBar({ isLoggedIn }: NavBarProps) {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid white', display: 'flex', justifyContent: 'flex-end' }}>
      <AuthButton isLoggedIn={isLoggedIn} />
    </nav>
  )
}
