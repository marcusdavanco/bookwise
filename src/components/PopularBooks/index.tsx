'use client'
import { useBooks } from '@/hooks/queries/books'
import { BookCard } from '../book-card'

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
    <div className="flex flex-col gap-3">
      {booksWithAverageRatings.map((book) => (
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
  )
}
