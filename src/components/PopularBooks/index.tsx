'use client'
import { useBooks } from '@/hooks/queries/books'
import { BookCard } from '../book-card'
import { ChevronRight } from 'lucide-react'

export function PopularBooks() {
  const { data: booksData } = useBooks()

  if (!booksData) {
    return
  }

  const books = booksData?.books

  if (!books || books.length === 0) {
    return
  }

  const booksWithAverageRatings = books.map((book) => {
    const ratings = book.ratings || []
    const averageRating =
      ratings.reduce((acc, rating) => acc + rating.rate, 0) / ratings.length
    return { ...book, rate: averageRating }
  })

  return (
    <>
      <div className="flex justify-between items-center h-[30px]">
        <span className="text-sm">Livros populares</span>
        <button className="flex gap-2 text-sm text-purple-100 hover:brightness-125 transition duration-200 ease-out hover:ease-in font-bold">
          Ver todos
          <ChevronRight className="text-xs" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {booksWithAverageRatings
          .sort((a, b) => b.ratings.length - a.ratings.length)
          .slice(0, 4)
          .map((book) => (
            <BookCard
              key={book.id}
              size="sm"
              author={book.author}
              name={book.name}
              ratings={book.rate}
              coverUrl={book.cover_url}
            />
          ))}
      </div>
    </>
  )
}
