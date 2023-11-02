import { api } from '@/lib/axios'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export type Category = {
  id: string
  name: string
}

export type Categories = {
  book_id: string
  categoryId: string
  category: Category
}

// QueryKey
export type CategoriesQueryKey = ['categories']

// queryFn
async function fetchCategories() {
  const { data: categories } = await api.get('/categories')

  return categories
}

// Hook
export const useCategories = <Tdata = { categories: Category[] }>(
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
