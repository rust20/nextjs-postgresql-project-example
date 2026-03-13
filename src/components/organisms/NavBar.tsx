import AuthButton from '../molecules/AuthButton'

interface NavBarProps {
  isLoggedIn: boolean
}

export default function NavBar({ isLoggedIn }: NavBarProps) {
  return (
    <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid white', display: 'flex', justifyContent: 'flex-start' }}>
      <AuthButton isLoggedIn={isLoggedIn} />
    </nav>
  )
}
