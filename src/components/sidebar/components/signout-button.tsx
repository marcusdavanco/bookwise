'use client'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <button onClick={() => signOut()}>
      <LogOutIcon className="h-7 w-7" color="#f75a68" />
    </button>
  )
}
