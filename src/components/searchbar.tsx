'use client'
import { Search } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

interface SearchBarProps {
  placeholder: string
  searchFn: (SearchArgument: string) => void
}

export const searchFormSchema = z.object({
  q: z.string(),
})

type SearchForm = z.infer<typeof searchFormSchema>

export function SearchBar({ placeholder, searchFn }: SearchBarProps) {
  const { register, handleSubmit } = useForm<SearchForm>()

  const onSearch: SubmitHandler<SearchForm> = (data: SearchForm) => {
    searchFn(data.q)
  }

  return (
    <form
      className="flex gap-2 py-[0.875rem] px-5 bg-gray-800 border-gray-500
        border-[1px] rounded flex-1 focus-within:border-1 
        focus-within:border-gray-400  mb-8"
      onSubmit={handleSubmit(onSearch)}
    >
      <input
        placeholder={placeholder}
        className="placeholder-gray-400 bg-transparent flex-1 outline-0"
        {...register('q')}
      />
      <Search className="h-5 w-5 text-gray-500" />
    </form>
  )
}
