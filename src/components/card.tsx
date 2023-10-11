import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, ...props }: CardProps) {
  return (
    <article
      {...props}
      className={`bg-gray-700 flex-1 rounded-[8px] p-5 py-4 ${props.className}`}
    >
      {children}
    </article>
  )
}
