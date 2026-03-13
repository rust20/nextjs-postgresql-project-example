import NavBar from '../organisms/NavBar'

interface BaseLayoutProps {
  children: React.ReactNode
  isLoggedIn: boolean
}

export default function BaseLayout({ children, isLoggedIn }: BaseLayoutProps) {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      {children}
    </>
  )
}
