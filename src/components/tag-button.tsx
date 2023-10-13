import { HTMLAttributes } from 'react'

interface TagButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  active?: boolean
}

export function TagButton({ text, active = false, ...props }: TagButtonProps) {
  return (
    <button
      className={`px-4 py-1 rounded-full border-2 
      ${active ? 'border-purple-200' : 'border-purple-100'} 
      ${active ? 'text-white' : 'text-purple-100'} 
      ${active ? 'bg-purple-200' : 'bg-transparent'}`}
      {...props}
    >
      {text}
    </button>
  )
}
