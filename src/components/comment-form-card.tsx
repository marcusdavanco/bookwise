'use client'
import { Check, Star, X } from 'lucide-react'
import { Avatar } from './avatar'
import { Card } from './card'

import { useSession } from 'next-auth/react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'

const RatingFormSchema = z.object({
  description: z.string().max(450),
  rate: z.number().min(0).max(5),
})

type RatingForm = z.infer<typeof RatingFormSchema>

interface RatingParams {
  description: string
  rate: number
  user_id: string
  book_id: string
}

interface CommentFormCardProps {
  bookId: string
}

export function CommentFormCard({ bookId }: CommentFormCardProps) {
  const session = useSession()
  const queryClient = useQueryClient()

  const user = session.data?.user

  const { register, handleSubmit, control, reset } = useForm<RatingForm>({
    defaultValues: {
      description: '',
      rate: 0,
    },
  })

  const saveRating = useMutation({
    mutationFn: (data: RatingParams) => api.post('/ratings', data),
    onError: (error: ErrorEvent) => {
      alert(error.message)
    },
    onSuccess: async () => {
      console.log('Rating updated successfully.')
      await queryClient.invalidateQueries({
        queryKey: ['books'],
        refetchType: 'active',
      })
      await queryClient.invalidateQueries({
        queryKey: ['ratings'],
        refetchType: 'active',
      })
      reset()
    },
  })

  const currentRate = useWatch({
    name: 'rate',
    defaultValue: 0,
    control,
  })

  if (!user) {
    return
  }

  const onSubmit: SubmitHandler<RatingForm> = (data: RatingForm) => {
    saveRating.mutate({
      description: data.description,
      rate: +data.rate,
      book_id: bookId,
      user_id: user.id,
    })
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
              <Star
                size={24}
                className="text-purple-100"
                fill={currentRate >= 1 ? '#8381D9' : ''}
              />
              <input
                type="radio"
                id="rating-1"
                value={1}
                className="hidden"
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-2">
              <Star
                size={24}
                className="text-purple-100"
                fill={currentRate >= 2 ? '#8381D9' : ''}
              />
              <input
                type="radio"
                id="rating-2"
                value={2}
                className="hidden"
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-3">
              <Star
                size={24}
                className="text-purple-100"
                fill={currentRate >= 3 ? '#8381D9' : ''}
              />
              <input
                type="radio"
                id="rating-3"
                className="hidden"
                value={3}
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-4">
              <Star
                size={24}
                className="text-purple-100"
                fill={currentRate >= 4 ? '#8381D9' : ''}
              />
              <input
                type="radio"
                id="rating-4"
                value={4}
                className="hidden"
                {...register('rate')}
              />
            </label>
            <label htmlFor="rating-5">
              <Star
                size={24}
                className="text-purple-100"
                fill={currentRate >= 5 ? '#8381D9' : ''}
              />
              <input
                type="radio"
                id="rating-5"
                value={5}
                className="hidden"
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
