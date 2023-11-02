'use client'

import { useSearchRatingsByUserId } from '@/hooks/queries/ratings'
import { PersonalReviewCard } from '../personal-review-card'
import { SearchBar } from '../searchbar'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export function PersonalRatings() {
  const { data: sessionData } = useSession()
  const userId = sessionData?.user.id || ''
  const [searchArgument, setSearchArgument] = useState('')

  const { data: ratingsData } = useSearchRatingsByUserId(
    userId,
    searchArgument,
    {
      enabled: !!userId,
      initialData: {
        ratings: [],
      },
      queryKey: ['ratings', userId, searchArgument],
    },
  )

  const ratings = ratingsData?.ratings

  if (!userId || !ratings) {
    return
  }

  return (
    <>
      <SearchBar
        placeholder="Buscar livro avaliado"
        searchFn={setSearchArgument}
      />
      <div className="flex flex-col gap-6">
        {ratings.map((rating) => (
          <PersonalReviewCard key={rating.id} {...rating} />
        ))}
      </div>
    </>
  )
}
