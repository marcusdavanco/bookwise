import { api } from '@/lib/axios'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export type Category = {
  id: string
  name: string
}

// QueryKey
export type CategoriesQueryKey = ['categories']

// queryFn
async function fetchCategories() {
  const { data: categories } = await api.get('/categories')

  return categories
}

// Hook
export const useBooks = <Tdata = { categories: Category[] }>(
  options?: UseQueryOptions<
    { books: Category[] },
    unknown,
    Tdata,
    CategoriesQueryKey
  >,
) => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    ...options,
  })
}
