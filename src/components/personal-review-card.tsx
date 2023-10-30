import Image from 'next/image'

import { Card } from './card'
import { Rating } from '@/hooks/queries/ratings'
import { Stars } from './stars'
import { formatDistanceToNow } from 'date-fns'

type BookReviewCardProps = Rating

export function PersonalReviewCard(props: BookReviewCardProps) {
  if (!props) {
    return
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-300 text-sm">
        {formatDistanceToNow(new Date(props.created_at))}
      </span>
      <Card className="w-[39rem] flex flex-col gap-6">
        <div className="flex gap-6">
          <Image
            src={props.book.cover_url.replace('public', '')}
            height={134}
            width={98}
            alt=""
            className="rounded"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="leading-short text-lg text-gray-100">
                {props.book.name}
              </span>
              <span className="text-sm text-gray-400">{props.book.author}</span>
            </div>
            <Stars rate={props.rate} />
          </div>
        </div>
        <p className="text-sm text-gray-300">{props.description}</p>
      </Card>
    </div>
  )
}
