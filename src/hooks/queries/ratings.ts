import { api } from '@/lib/axios'
import {
  QueryFunctionContext,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query'
import { Book } from './books'
import { User } from './users'

export type Rating = {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
  book: Book
  user: User
}

// QueryKey
export type RatingsQueryKey = ['ratings']
export type RatingsByIdQueryKey = ['ratings', string]
export type RatingsByUserIdQueryKey = ['ratings', string]

// queryFn
async function fetchRatings() {
  const { data: ratings } = await api.get('/ratings')

  return ratings
}

async function getRatingById({
  queryKey,
}: QueryFunctionContext<RatingsByIdQueryKey>) {
  const [, id] = queryKey

  const { data: rating } = await api.get(`/ratings/${id}`)

  return rating
}

async function getRatingByUserId({
  queryKey,
}: QueryFunctionContext<RatingsByUserIdQueryKey>) {
  const [, id] = queryKey

  const { data: ratings } = await api.get(`/ratings/user/${id}`)

  return ratings
}

// Hook
export const useRatings = <Tdata = { ratings: Rating[] }>(
  options?: UseQueryOptions<
    { ratings: Rating[] },
    unknown,
    Tdata,
    RatingsQueryKey
  >,
) => {
  return useQuery({
    queryKey: ['ratings'],
    queryFn: fetchRatings,
    ...options,
  })
}

export const useRatingsById = <Rating>(
  id: string,
  options?: UseQueryOptions<Rating, unknown, Book, RatingsByIdQueryKey>,
) => {
  return useQuery<Rating, unknown, Book, RatingsByIdQueryKey>({
    queryKey: ['ratings', id],
    queryFn: getRatingById,
    ...options,
    enabled: !!id,
  })
}

export const useRatingsByUserId = <TData = { ratings: Rating[] }>(
  id: string,
  options?: UseQueryOptions<
    { ratings: Rating[] },
    unknown,
    TData,
    RatingsByIdQueryKey
  >,
) => {
  return useQuery({
    queryKey: ['ratings', id],
    queryFn: getRatingByUserId,
    ...options,
    enabled: !!id,
  })
}
