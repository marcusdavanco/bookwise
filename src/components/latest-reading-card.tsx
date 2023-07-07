import { Star } from 'lucide-react'
import Image from 'next/image'
import book from '../../public/book.jpg'

export function LatestReadingCard() {
  return (
    <article className="bg-gray-600 rounded-[8px] p-6 w-[38rem] flex flex-col gap-8">
      <section className="flex gap-5">
        <Image
          src={book}
          height="152"
          width="108"
          alt="Livro"
          className="h-[152px] w-[108px] rounded-[4px]"
        />
        <div className="flex flex-col ">
          <div className="flex flex-col mb-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-4">
                <span className="text-gray-300">Há 2 dias</span>
              </div>
              <div className="flex gap-1">
                <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
                <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
                <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
                <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
                <Star className="h-4 w-4 text-purple-100" />
              </div>
            </div>
            <span className="text-base font-bold">O Hobbit</span>
            <span className="text-sm text-gray-400">J. R. R. Tolkien</span>
          </div>
          <div className="flex ">
            <span className="text-sm line-clamp-2 text-ellipsis text-gray-300">
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius
              leo a in. Amet libero pharetra nunc elementum fringilla velit
              ipsum. Sed vulputate massa velit nibh...
            </span>
          </div>
        </div>
      </section>
    </article>
  )
}
