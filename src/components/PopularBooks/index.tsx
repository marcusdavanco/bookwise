'use client'
import { useBooks } from '@/hooks/queries/books'
import { BookCard } from '../book-card'

// TODO: Improve this insanity

export function PopularBooks() {
  const { data: booksData } = useBooks()

  const books = booksData?.books

  const ratings = books?.map((book) => {
    return book.ratings
  })

  if (!books) {
    return
  }

  if (!ratings) {
    return
  }

  // TODO - the average is wrong
  const averageRatingsList = ratings
    .map((rating) => ratings[0].map((rating) => rating.rate))
    .map((rating) =>
      Math.ceil(rating.reduce((acc, rating) => (acc + rating) / 2, 0)),
    )

  const completeBooks = []

  for (let i = 0; i < books.length; i++) {
    completeBooks.push({
      ...books[i],
      rate: averageRatingsList[i],
    })
  }

  console.log('COMPLETE_BOOK', completeBooks)

  return (
    <div className="flex flex-col gap-3">
      {completeBooks.map((book) => (
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
