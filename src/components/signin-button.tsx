'use client'

import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

interface SignInButtonProps {
  imageUrl: string
  providerName: string
}

export function SignInButton({ imageUrl, providerName }: SignInButtonProps) {
  async function handleRegister() {
    try {
      // await signIn(providerName, {
      //   callbackUrl: `${window.location.hostname}/home`,
      // })
      await api.post('/users', {
        // TODO - There's no data to be sent here as this is not a form...
      })
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response?.data.message)
        return
      }

      console.error(err)
    }
  }

  return (
    <button
      onClick={handleRegister}
      className="flex flex-1 justify-start items-center bg-gray-600 hover:bg-gray-500 px-6 py-5 rounded-[8px] text-gray-200 font-bold transition-all duration-300 ease-out hover:ease-in"
    >
      <Image height="32" width="32" alt="" src={imageUrl} className="mr-5" />
      Entrar com {providerName === 'google' ? 'Google' : 'GitHub'}
    </button>
  )
}
