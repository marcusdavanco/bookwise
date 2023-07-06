import Image from 'next/image'

interface AvatarProps {
  imageUrl: string
  size?: number
}

export function Avatar({ imageUrl, size = 40 }: AvatarProps) {
  return (
    <div
      className={`rounded-full bg-gradient-to-t from-blue-50 to-green-50 max-h-[${size}px] w-[${size}px]`}
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
