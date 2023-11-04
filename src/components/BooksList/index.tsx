'use client'

import { useSearchBooksByCategoryId } from '@/hooks/queries/books'
import { BookCard } from '../book-card'
import { CategorySelector } from '../category-selector'
import { useState } from 'react'

export function BooksList() {
  const [category, setCategory] = useState('')
  const { data: booksData } = useSearchBooksByCategoryId(category, '')

  console.log('BOOKSDATA', booksData)

  const books = booksData?.books

  if (!books) {
    return <h2>NO BOOKS</h2>
  }

  const booksWithAverageRatings = books.map((book) => {
    const ratings = book.ratings || []
    const averageRating =
      ratings.reduce((acc, rating) => acc + rating.rate, 0) / ratings.length
    return { ...book, rate: averageRating }
  })

  return (
    <>
      <CategorySelector selectFn={setCategory} currentCategory={category} />
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-5 my-2">
        {booksWithAverageRatings.map((book) => (
          <BookCard
            key={book.id}
            author={book.author}
            coverUrl={book.cover_url}
            name={book.name}
            ratings={book.rate}
          />
        ))}
      </div>
    </>
  )
}
