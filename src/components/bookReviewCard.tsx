import { Star } from 'lucide-react'
import Image from 'next/image'
import { Avatar } from './avatar'

import user from '../../public/user.jpg'
import book from '../../public/book.jpg'

export function bookReviewCard() {
  return (
    <article>
      <header>
        <div>
          <Avatar imageUrl={user.src} />
          <div>
            <span>Jaxson Dias</span>
            <span>Hoje</span>
          </div>
        </div>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </header>
      <section>
        <Image src={book} height='152' width='108' alt='Livro' />
        <div>
          <span>O Hobbit</span>
          <span>J. R. R. Tolkien</span>
          <div>
            <p>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
              a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
              vulputate massa velit nibh...
            </p>
            <span>ver mais</span>
          </div>
        </div>
      </section>
    </article>
  )
}
