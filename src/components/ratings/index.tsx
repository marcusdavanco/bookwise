'use client'

import { useRatings } from '@/hooks/queries/ratings'
import { BookReviewCard } from '../book-review-card'

export function Ratings() {
  const { data: ratingsData } = useRatings()

  return (
    <>
      {ratingsData && (
        <span className="mb-1 text-sm">Avaliações mais recentes</span>
      )}
      {ratingsData?.ratings.map((rating) => (
        <BookReviewCard key={rating.id} {...rating} />
      ))}
    </>
  )
}
