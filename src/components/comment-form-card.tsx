'use client'
import { Check, Star, X } from 'lucide-react'
import { Avatar } from './avatar'
import { Card } from './card'

import { useSession } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

export function CommentFormCard() {
  const session = useSession()

  const user = session.data?.user

  const RatingFormSchema = z.object({
    description: z.string().max(450),
    rate: z.number().min(0).max(5),
  })

  type RatingForm = z.infer<typeof RatingFormSchema>

  const { register, handleSubmit } = useForm<RatingForm>()

  const onSubmit: SubmitHandler<RatingForm> = (data: RatingForm) => {
    return 'TODO'
  }

  if (!user) {
    return
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="flex flex-col gap-5 py-6">
        <header className="flex justify-between">
          <div className="flex gap-4">
            <div>
              <Avatar imageUrl={user.avatar_url} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-md">{user.name}</span>
            </div>
          </div>
          <div className="flex gap-1">
            <label htmlFor="rating-1">
              <Star size={24} className="text-purple-100" />
              <input
                type="radio"
                id="rating-1"
                value={1}
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-2">
              <Star size={24} className="text-purple-100" />
              <input
                type="radio"
                id="rating-2"
                value={2}
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-3">
              <Star size={24} className="text-purple-100" />
              <input
                type="radio"
                id="rating-3"
                value={3}
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-4">
              <Star size={24} className="text-purple-100" />
              <input
                type="radio"
                id="rating-4"
                value={4}
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-5">
              <Star size={24} className="text-purple-100" />
              <input
                type="radio"
                id="rating-5"
                value={5}
                {...register('rate')}
              />
            </label>
          </div>
        </header>
        <textarea
          className="rounded bg-gray-800 px-5 py-[14px] h-[164px] resize-none"
          placeholder="Escreva sua avaliação"
          maxLength={450}
          {...register('description')}
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-600 rounded-[4px] px-2 py-2 w-10 h-10"
            onClick={() => console.log('close')}
          >
            <X className="text-purple-100" />
          </button>
          <button
            className="bg-gray-600 rounded-[4px] px-2 py-2 w-10 h-10"
            type="submit"
          >
            <Check className="text-green-100" />
          </button>
        </div>
      </Card>
    </form>
  )
}
