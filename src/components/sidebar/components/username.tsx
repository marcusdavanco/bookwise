'use client'

import { Avatar } from '@/components/avatar'
import { UserCircle2 } from 'lucide-react'
import { useSession } from 'next-auth/react'

export function UserName() {
  const { data: session } = useSession()
  const image = session?.user?.avatar_url

  return (
    <div className="flex gap-3 items-center justify-center ">
      {!image ? (
        <UserCircle2 size={31} stroke="#8D95AF" />
      ) : (
        <Avatar imageUrl={image} size={31} />
      )}
      <span
        className={`text-sm font-semibold text-gray-200 min-w-[60px] text-center ${
          session?.user?.name ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}
      >
        {session?.user?.name?.split(' ')[0] ?? ''}
      </span>
    </div>
  )
}
