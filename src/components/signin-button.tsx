'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface SignInButtonProps {
  imageUrl: string
  providerName: string
  disabled?: boolean
}

export function SignInButton({
  imageUrl,
  providerName,
  disabled = false,
}: SignInButtonProps) {
  async function handleRegister() {
    signIn(providerName)
  }

  return (
    <button
      onClick={handleRegister}
      className="flex flex-1 justify-start items-center bg-gray-600 hover:bg-gray-500 px-6 py-5 rounded-[8px] text-gray-200 font-bold transition-all duration-300 ease-out hover:ease-in disabled:opacity-25 disabled:hover:bg-gray-600"
      disabled={disabled}
    >
      <Image height="32" width="32" alt="" src={imageUrl} className="mr-5" />
      Entrar com {providerName === 'google' ? 'Google' : 'GitHub'}
    </button>
  )
}
