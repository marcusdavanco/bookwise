import { api } from '@/lib/axios'
import {
  QueryFunctionContext,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query'

export type Rating = {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
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

  const { data: rating } = await api.get(`/ratings/user/${id}`)

  return rating
}

// Hook
export const useBooks = <Tdata = { ratings: Rating[] }>(
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

export const useRatingsById = <Book>(
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

export const useRatingsByUserId = <Book>(
  id: string,
  options?: UseQueryOptions<Rating, unknown, Book, RatingsByIdQueryKey>,
) => {
  return useQuery<Rating, unknown, Book, RatingsByIdQueryKey>({
    queryKey: ['ratings', id],
    queryFn: getRatingByUserId,
    ...options,
    enabled: !!id,
  })
}
