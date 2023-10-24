'use client'

import { useRatings } from '@/hooks/queries/ratings'
import { BookReviewCard } from '../book-review-card'

export function Ratings() {
  const { data: ratingsData } = useRatings()

  return (
    <>
      {ratingsData?.ratings.map((rating) => (
        <BookReviewCard key={rating.id} {...rating} />
      ))}
    </>
  )
}
