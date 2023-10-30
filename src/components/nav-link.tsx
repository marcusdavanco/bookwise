'use client'

import Link, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface LinkProps extends NextLinkProps {
  children: ReactNode
}

export function NavLink({ children, ...rest }: LinkProps) {
  const pathname = usePathname()
  const isActive = pathname.includes(rest.href.toString())

  return (
    <Link
      {...rest}
      className={`flex gap-3 py-6 pl-4  ${
        isActive
          ? 'relative'
          : ' text-gray-400 hover:text-gray-200 transition duration-300 ease-out hover:ease-in'
      }`}
    >
      {isActive && (
        <span className="absolute -left-1  h-[1.5rem] top-1/2 translate-y-[-50%] w-1 rounded bg-gradient-to-t from-blue-50 to-green-50" />
      )}
      {children}
    </Link>
  )
}
