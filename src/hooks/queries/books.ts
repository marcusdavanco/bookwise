import { api } from '@/lib/axios'
import {
  QueryFunctionContext,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query'
import { Rating } from './ratings'
import { Category } from './categories'

export type Book = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
  categories: Category
  ratings: Rating[]
}

// QueryKey
export type BooksQueryKey = ['books']
export type BooksByIdQueryKey = ['books', string]
export type BooksByCategoryIdQueryKey = ['books', string]

// queryFn
async function fetchBooks() {
  const { data: books } = await api.get('/books')

  return books
}

async function fetchBooksByCategory({
  queryKey,
}: QueryFunctionContext<BooksByCategoryIdQueryKey>) {
  const [, id] = queryKey

  const { data: books } = await api.get(`/books/category/${id}`)

  return books
}

async function getBookById({
  queryKey,
}: QueryFunctionContext<BooksByIdQueryKey>) {
  const [, id] = queryKey

  const { data: book } = await api.get(`/books/${id}`)

  return book
}

// Hook
export const useBooks = <Tdata = { books: Book[] }>(
  options?: UseQueryOptions<{ books: Book[] }, unknown, Tdata, BooksQueryKey>,
) => {
  return useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
    ...options,
  })
}

export const useBooksById = <Book>(
  id: string,
  options?: UseQueryOptions<Book, unknown, Book, BooksByIdQueryKey>,
) => {
  return useQuery<Book, unknown, Book, BooksByIdQueryKey>({
    queryKey: ['books', id],
    queryFn: getBookById,
    ...options,
    enabled: !!id,
  })
}

export const useBooksByCategory = <Tdata = { books: Book[] }>(
  id: string,
  options?: UseQueryOptions<
    { books: Book[] },
    unknown,
    Tdata,
    BooksByCategoryIdQueryKey
  >,
) => {
  return useQuery({
    queryKey: ['books', id],
    queryFn: fetchBooksByCategory,
    ...options,
    enabled: !!id,
  })
}
