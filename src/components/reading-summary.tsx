'use client'
import { Avatar } from './avatar'
import { BookOpen, Bookmark, Contact, Library } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useUserById } from '@/hooks/queries/users'
import { findMostRecurringElements } from '@/utils/commonFunctions'

export function ReadingSummary() {
  const session = useSession()
  const id = session.data?.user.id || ''

  const { data: userData } = useUserById(id)

  const user = userData?.user

  if (!user) {
    return
  }

  const sumOfTotalPages = user.ratings.reduce((accumulator, rating) => {
    return accumulator + rating.book.total_pages
  }, 0)

  const uniqueAuthors = new Set(
    user.ratings.map((rating) => rating.book.author),
  ).size

  const categories = user.ratings.flatMap((rating) =>
    rating.book.categories.map((categories) => categories.category.name),
  )

  const mostReadCategory = findMostRecurringElements(categories)

  return (
    <article className="flex flex-col mt-[76px] border-l border-gray-700">
      <section className="flex flex-col items-center pb-2 gap-5">
        <Avatar imageUrl={user.avatar_url} size={72} />
        <p className="flex flex-col items-center">
          <span className="leading-short text-lg text-gray-100 font-bold">
            {user.name}
          </span>
          <span className="text-gray-400 text-sm">
            {`member since ${user.created_at.toString().slice(0, 4)}`}
          </span>
        </p>
      </section>
      <section className="flex justify-center my-8">
        <span className="w-[1.5rem] h-1 rounded bg-gradient-to-r from-blue-50 to-green-50"></span>
      </section>
      <section className="flex flex-col px-14 py-5 gap-10">
        <div className="flex items-center gap-5">
          <BookOpen className="text-green-100 h-8 w-8" />
          <p className="flex flex-col">
            <span className="text-gray-200 leading-short text-sm font-bold">
              {sumOfTotalPages}
            </span>
            <span className="text-gray-300 text-sm">Páginas lidas</span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Library className="text-green-100 h-8 w-8" />
          <p className="flex flex-col">
            <span className="text-gray-200 leading-short text-sm font-bold">
              {user.ratings.length}
            </span>
            <span className="text-gray-300 text-sm">Livros avaliados</span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Contact className="text-green-100 h-8 w-8" />
          <p className="flex flex-col">
            <span className="text-gray-200 leading-short text-sm font-bold">
              {uniqueAuthors}
            </span>
            <span className="text-gray-300 text-sm">Autores lidos</span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Bookmark className="text-green-100 h-8 w-8" />
          <p className="flex flex-col">
            <span className="text-gray-200 leading-short text-sm font-bold">
              {mostReadCategory}
            </span>
            <span className="text-gray-300 text-sm">Categoria mais lida</span>
          </p>
        </div>
      </section>
    </article>
  )
}
