'use client'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface LinkProps extends NextLinkProps {
  text: string
}

export function Link({ text, href, ...rest }: LinkProps) {
  const pathname = usePathname()

  return (
    <NextLink {...rest} className="">
      {text}
    </NextLink>
  )
}
