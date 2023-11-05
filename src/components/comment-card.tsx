import { Avatar } from './avatar'
import { Card } from './card'
import { formatDistanceToNow } from 'date-fns'

import { Rating } from '@/hooks/queries/ratings'
import { Stars } from './stars'

type CommentCardProps = Rating

export function CommentCard(props: CommentCardProps) {
  console.log('PROPS', props)

  return (
    <Card className="flex flex-col gap-5 ">
      <header className="flex justify-between">
        <div className="flex gap-4">
          <div>
            <Avatar imageUrl={props.user?.avatar_url} />
          </div>
          <div className="flex flex-col">
            <span className="text-md">{props.user.name}</span>
            <span className="text-gray-400">
              {formatDistanceToNow(new Date(props.created_at))}
            </span>
          </div>
        </div>
        <Stars rate={props.rate} />
      </header>
      <div className="text-gray-300 text-sm leading-[160%]">
        {props.description}
      </div>
    </Card>
  )
}
