'use client'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Avatar } from './avatar'

import user from '../../public/user.jpg'
import book from '../../public/book.jpg'
import { useBooksById } from '@/hooks/queries/books'
import { Rating } from '@/hooks/queries/ratings'

type BookReviewCardProps = Rating

export function BookReviewCard(props: BookReviewCardProps) {
  console.log(props.user.avatar_url)
  return (
    <article className="bg-gray-700 rounded-[8px] p-6 w-[38rem] h-[17.5rem] flex flex-col gap-8">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <div>
            <Avatar imageUrl={props.user.avatar_url} />
          </div>
          <div className="flex flex-col">
            <span className="text-md">{props.user.name}</span>
            <span className="text-gray-400">{props.created_at.toString()}</span>
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
      <section className="flex gap-5">
        <Image
          src={book}
          height="152"
          width="108"
          alt="Livro"
          className="h-[152px] w-[108px] rounded-[4px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-base font-bold">{props.book.name}</span>
            <span className="text-sm text-gray-400">{props.book.author}</span>
          </div>
          <div className="flex ">
            <span className="text-sm line-clamp-4 text-ellipsis">
              {props.description}
              <button className="text-purple-100 font-bold text-sm">
                ver mais
              </button>
            </span>
          </div>
        </div>
      </section>
    </article>
  )
}
