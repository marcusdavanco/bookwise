'use client'
import Image from 'next/image'
import { Card } from './card'
import { useRatings } from '@/hooks/queries/ratings'
import { Stars } from './stars'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { ChevronRight } from 'lucide-react'

export function LatestReadingCard() {
  const { data: sessionData } = useSession()
  const { data: ratingsData } = useRatings()
  const ratings = ratingsData?.ratings
  const userId = sessionData?.user.id

  const latestUserRating = useMemo(
    () => ratings?.find((ratings) => ratings.user_id === userId),
    [ratings, userId],
  )

  if (!latestUserRating) {
    return
  }

  return (
    <>
      <div className="flex justify-between gap-3 ">
        <span className="mb-1 text-sm">Sua última leitura</span>
        <button className="flex gap-2 text-sm text-purple-100 hover:brightness-125 transition duration-200 ease-out hover:ease-in font-bold">
          Ver todos
          <ChevronRight className=" text-xs" />
        </button>
      </div>
      <Card className="bg-gray-600 rounded-[8px] p-6 w-[38rem] flex flex-col gap-8">
        <section className="flex gap-5">
          <Image
            src={latestUserRating.book.cover_url.replace('public', '')}
            height="152"
            width="108"
            alt="Livro"
            className="h-[152px] w-[108px] rounded-[4px]"
          />
          <div className="flex flex-col ">
            <div className="flex flex-col mb-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-4">
                  <span className="text-gray-300">Há 2 dias</span>
                </div>
                <Stars rate={latestUserRating.rate} />
              </div>
              <span className="text-base font-bold">
                {latestUserRating.book.name}
              </span>
              <span className="text-sm text-gray-400">
                {latestUserRating.book.author}
              </span>
            </div>
            <div className="flex ">
              <span className="text-sm line-clamp-2 text-ellipsis text-gray-300">
                {latestUserRating.description}
              </span>
            </div>
          </div>
        </section>
      </Card>
    </>
  )
}
