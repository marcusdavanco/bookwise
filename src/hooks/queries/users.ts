import { api } from '@/lib/axios'
import {
  QueryFunctionContext,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query'
import { Rating } from './ratings'

export type User = {
  id: string
  username: string
  name: string
  email: string
  avatar_url: string
  created_at: Date
  emailVerified: null
  ratings: Rating[]
}

// QueryKey
export type UsersByIdQueryKey = ['users', string]

// queryFn
async function getUserById({
  queryKey,
}: QueryFunctionContext<UsersByIdQueryKey>) {
  const [, id] = queryKey

  const { data: user } = await api.get(`/users/${id}`)

  return user
}

// Hook
export const useUserById = <TData = { user: User }>(
  id: string,
  options?: UseQueryOptions<TData, unknown, TData, UsersByIdQueryKey>,
) => {
  return useQuery<TData, unknown, TData, UsersByIdQueryKey>({
    queryKey: ['users', id],
    queryFn: getUserById,
    ...options,
    enabled: !!id,
  })
}
