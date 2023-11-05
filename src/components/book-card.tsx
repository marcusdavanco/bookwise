'use client'

import Image from 'next/image'
import { Card } from './card'
import * as Dialog from '@radix-ui/react-dialog'

import { BookDetailDrawer } from './book-detail-drawer'
import { Stars } from './stars'
import { Book } from '@/hooks/queries/books'

export interface BookWithAverageRating extends Book {
  rate: number
}

interface BookCardProps {
  book: BookWithAverageRating
  size?: 'sm' | 'md'
}

export function BookCard({ book, size = 'md' }: BookCardProps) {
  return (
    <Card className="flex ">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="flex gap-5 cursor-pointer">
            <Image
              src={book.cover_url?.replace('public', '')}
              height={size === 'sm' ? 64 : 152}
              width={size === 'sm' ? 64 : 108}
              alt="popular book name"
              className="rounded-[4px]"
            />

            <div className="flex flex-col justify-between">
              <header>
                <p className="text-gray-100 text-md leading-[140%]">
                  {book.name}
                </p>
                <p className="text-gray-400 text-sm leading-[160%]">
                  {book.author}
                </p>
              </header>

              <Stars rate={book.rate} />
            </div>
          </div>
        </Dialog.Trigger>
        <BookDetailDrawer book={book} />
      </Dialog.Root>
    </Card>
  )
}
