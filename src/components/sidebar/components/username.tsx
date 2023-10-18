'use client'

import { Avatar } from '@/components/avatar'
import { useSession } from 'next-auth/react'

export function UserName() {
  const { data: session } = useSession()
  const image = session?.user?.avatar_url

  return (
    <div className="flex gap-3 items-center">
      <Avatar
        imageUrl={session?.user?.avatar_url ?? ''}
        size={32}
        className={`${
          image ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
      />
      <span className="text-sm text-gray-200">
        {session?.user?.name?.split(' ')[0] ?? ''}
      </span>
    </div>
  )
}
