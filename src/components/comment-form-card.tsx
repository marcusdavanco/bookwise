import { Check, Star, X } from 'lucide-react'
import { Avatar } from './avatar'
import { Card } from './card'

import user from '../../public/user.jpg'

export function CommentFormCard() {
  return (
    <Card className="flex flex-col gap-5 py-6">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <div>
            <Avatar imageUrl={user.src} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-md">Jaxson Dias</span>
          </div>
        </div>
        <div className="flex gap-1">
          <button>
            <Star size={24} className="text-purple-100" />
          </button>
          <button>
            <Star size={24} className="text-purple-100" />
          </button>
          <button>
            <Star size={24} className="text-purple-100" />
          </button>
          <button>
            <Star size={24} className="text-purple-100" />
          </button>
          <button>
            <Star size={24} className="text-purple-100" />
          </button>
        </div>
      </header>
      <textarea
        className="rounded bg-gray-800 px-5 py-[14px] h-[164px]"
        placeholder="Escreva sua avaliação"
        maxLength={450}
      />
      <div className="flex justify-end gap-2">
        <button className="bg-gray-600 rounded-[4px] px-2 py-2 w-10 h-10">
          <X className="text-purple-100" />
        </button>
        <button className="bg-gray-600 rounded-[4px] px-2 py-2 w-10 h-10">
          <Check className="text-green-100" />
        </button>
      </div>
    </Card>
  )
}
