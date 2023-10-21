'use client'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

export function SignOutButton() {
  const handleSignout = () => {
    signOut()
    redirect('/login')
  }

  return (
    <button onClick={handleSignout}>
      <LogOutIcon className="h-7 w-7" color="#f75a68" />
    </button>
  )
}
