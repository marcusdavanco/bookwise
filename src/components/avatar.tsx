import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string
  size?: number
}

export function Avatar({ imageUrl, size = 40, ...rest }: AvatarProps) {
  return (
    <div
      className={`rounded-full bg-gradient-to-t from-blue-50 to-green-50 max-h-[${size}px] w-fit`}
      {...rest}
    >
      <Image
        src={imageUrl}
        height={size - 1}
        width={size - 1}
        alt="user name"
        className="rounded-full"
      />
    </div>
  )
}
