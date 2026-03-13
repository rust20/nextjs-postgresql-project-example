import { Link } from '@tanstack/react-router'
import { ComponentProps } from 'react'

type NavLinkProps = ComponentProps<typeof Link> & { children: React.ReactNode }

export default function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Link {...props}>
      <button>{children}</button>
    </Link>
  )
}
