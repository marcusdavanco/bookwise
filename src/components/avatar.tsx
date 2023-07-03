import Image from 'next/image'

interface AvatarProps {
  imageUrl: string
}

export function Avatar({ imageUrl }: AvatarProps) {
  return (
    <div className="rounded-full bg-gradient-to-t from-blue-50 to-green-50 h-10 w-10">
      <Image
        src={imageUrl}
        height="39"
        width="39"
        alt="user name"
        className="rounded-full"
      />
    </div>
  )
}
