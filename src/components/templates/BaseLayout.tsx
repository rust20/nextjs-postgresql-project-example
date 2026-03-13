import NavBar from '../organisms/NavBar'

interface BaseLayoutProps {
  children: React.ReactNode
  isLoggedIn: boolean
}

export default function BaseLayout({ children, isLoggedIn }: BaseLayoutProps) {
  return (
    <div className="min-h-screen">
      <NavBar isLoggedIn={isLoggedIn} />
      <main className="p-4">{children}</main>
    </div>
  )
}
