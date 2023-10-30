'use client'

import { useRatingsByUserId } from '@/hooks/queries/ratings'
import { PersonalReviewCard } from '../personal-review-card'
import { SearchBar } from '../searchbar'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export function PersonalRatings() {
  const { data: sessionData } = useSession()
  const userId = sessionData?.user.id || ''

  const { data: ratingsData } = useRatingsByUserId(userId, {
    enabled: !!userId,
    initialData: {
      ratings: [],
    },
    queryKey: ['ratings', userId],
  })

  const ratings = ratingsData?.ratings

  const [searchArgument, setSearchArgument] = useState('')

  // function handleSearch(searchArgument) {
  //   setSearchArgument(searchArgument)
  // }

  if (!userId || !ratings) {
    return
  }

  return (
    <>
      <SearchBar placeholder="Buscar livro avaliado" />
      <div className="flex flex-col gap-6">
        {ratings
          .filter((rating) => rating.book.name.includes(searchArgument))
          .map((rating) => (
            <PersonalReviewCard key={rating.id} {...rating} />
          ))}
      </div>
    </>
  )
}
