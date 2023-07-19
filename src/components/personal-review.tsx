import { Star } from 'lucide-react'
import Image from 'next/image'

import book from '../../public/book.jpg'

export function PersonalReview() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-300 text-sm">Há 2 dias</span>
      <article className="bg-gray-700 p-6 rounded-[8px] w-[39rem] flex flex-col gap-6">
        <div className="flex gap-6">
          <Image
            src={book}
            height={134}
            width={98}
            alt=""
            className="rounded"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="leading-short text-lg text-gray-100">
                O Hobbit
              </span>
              <span className="text-sm text-gray-400">J. R. R. Tolkien</span>
            </div>
            <div className="flex gap-1">
              <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
              <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
              <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
              <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
              <Star className="h-4 w-4 text-purple-100" />
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-300">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </article>
    </div>
  )
}
