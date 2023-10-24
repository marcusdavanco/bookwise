import { api } from '@/lib/axios'
import {
  QueryFunctionContext,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query'

export type User = {
  id: string
  username: string
  name: string
  email: string
  avatar_url: string
  created_at: Date
  emailVerified: null
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
export const useUserById = <User>(
  id: string,
  options?: UseQueryOptions<User, unknown, User, UsersByIdQueryKey>,
) => {
  return useQuery<User, unknown, User, UsersByIdQueryKey>({
    queryKey: ['users', id],
    queryFn: getUserById,
    ...options,
    enabled: !!id,
  })
}
