import { Star } from 'lucide-react'
import { Avatar } from './avatar'
import { Card } from './card'

import user from '../../public/user.jpg'

export function CommentCard() {
  return (
    <Card className="flex flex-col gap-5 ">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <div>
            <Avatar imageUrl={user.src} />
          </div>
          <div className="flex flex-col">
            <span className="text-md">Jaxson Dias</span>
            <span className="text-gray-400">Hoje</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
          <Star className="h-4 w-4 text-purple-100" />
        </div>
      </header>
      <div className="text-gray-300 text-sm leading-[160%]">
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </div>
    </Card>
  )
}
