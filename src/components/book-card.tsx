import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from './card'

import book from '../../public/book.jpg'

interface BookCardProps {
  title?: string
  author?: string
  rating?: number
  size?: 'sm' | 'md'
}

export function BookCard({
  title,
  author,
  rating,
  size = 'md',
}: BookCardProps) {
  return (
    <Card className="flex gap-5 flex-1">
      <Image
        src={book.src}
        height={size === 'sm' ? 64 : 152}
        width={size === 'sm' ? 64 : 108}
        alt="popular book name"
        className="rounded-[4px]"
      />
      <div className="flex flex-col justify-between">
        <header>
          <p className="text-gray-100 text-md leading-[140%]">
            A revolução dos bichos
          </p>
          <p className="text-gray-400 text-sm leading-[160%]">George Orwell</p>
        </header>

        <div className="flex gap-1">
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" />
        </div>
      </div>
    </Card>
  )
}
