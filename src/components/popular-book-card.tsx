import { Star } from "lucide-react";
import Image from "next/image";

import book from '../../public/book.jpg'

export function PopularBookCard() {
  return (
    <article className="flex px-5 py-[1.125rem] bg-gray-700 rounded-[4px] gap-5">
      <Image src={book.src} height={94} width={64} alt="popular book name" className="rounded-[4px]" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="leading-short font-bold">O Hobbit</span>
          <span className="text-sm text-gray-400">J. R. R. Tolkien</span>
        </div>
        <div>
          <div className="flex gap-1">
            <Star className="h-4 w-4 text-purple-100" fill='#8381D9' />
            <Star className="h-4 w-4 text-purple-100" fill='#8381D9' />
            <Star className="h-4 w-4 text-purple-100" fill='#8381D9' />
            <Star className="h-4 w-4 text-purple-100" fill='#8381D9' />
            <Star className="h-4 w-4 text-purple-100" />
          </div>
        </div>
      </div>
    </article>
  )
}