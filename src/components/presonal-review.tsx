import { Star } from "lucide-react";
import Image from "next/image";

import book from '../../public/book.jpg'

export function PersonalReview() {
  return (
    <>
      <span>
        Há 2 dias
      </span>
      <article>
        <Image src={book} height={134} width={98} alt="" />
        <div>
          <span>O Hobbit</span>
          <span>J. R. R. Tolkien</span>
          <div className="flex gap-1">
            <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
            <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
            <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
            <Star className="h-4 w-4 text-purple-100" fill="#8381D9" />
            <Star className="h-4 w-4 text-purple-100" />
          </div>
        </div>
        <p>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
          Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque.
        </p>
      </article>
    </>
  )
}