import { Star } from "lucide-react";
import Image from "next/image";

import book from '../../public/book.jpg'

export function PopularBookCard() {
  return (
    <article>
      <Image src={book.src} height={94} width={64} alt="popular book name" />
      <div>
        <div>
          <span>O Hobbit</span>
          <span>J. R. R. Tolkien</span>
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