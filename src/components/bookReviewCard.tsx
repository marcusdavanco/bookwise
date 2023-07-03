import { Star } from 'lucide-react'
import Image from 'next/image'
import { Avatar } from './avatar'

import user from '../../public/user.jpg'
import book from '../../public/book.jpg'

export function BookReviewCard() {
  return (
    <article className="bg-gray-700 rounded-[8px] p-6 w-[38rem] h-[17.5rem] flex flex-col gap-8">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <Avatar imageUrl={user.src} />
          <div className="flex flex-col">
            <span className="text-md">Jaxson Dias</span>
            <span className="text-gray-400">Hoje</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </div>
      </header>
      <section className="flex gap-5">
        <Image src={book} height='152' width='108' alt='Livro' className="h-[152px] w-[108px] rounded-[4px]" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-base font-bold">O Hobbit</span>
            <span className="text-sm text-gray-400">J. R. R. Tolkien</span>
          </div>
          <div className="flex ">
            <span className="text-sm">
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
              a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
              vulputate massa velit nibh...<button className="text-purple-100 font-bold text-sm">ver mais</button>
            </span>
          </div>
        </div>
      </section>
    </article>
  )
}
