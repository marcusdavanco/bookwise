import { Avatar } from './avatar'
import user from '../../public/user.jpg'
import { BookOpen, Bookmark, Contact, Library } from 'lucide-react'

export function ReadingSummary() {
  return (
    <article className="flex flex-col mt-[76px] border-l border-gray-700">
      <section className="flex flex-col items-center pb-2 gap-5">
        <Avatar imageUrl={user.src} size={72} />
        <p className="flex flex-col items-center">
          <span className="leading-short text-lg text-gray-100 font-bold">
            Cristofer Rosser
          </span>
          <span className="text-gray-400 text-sm">member since 2010</span>
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
              3853
            </span>
            <span className="text-gray-300 text-sm">Páginas lidas</span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Library className="text-green-100 h-8 w-8" />
          <p className="flex flex-col">
            <span className="text-gray-200 leading-short text-sm font-bold">
              10
            </span>
            <span className="text-gray-300 text-sm">Livros avaliados</span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Contact className="text-green-100 h-8 w-8" />
          <p className="flex flex-col">
            <span className="text-gray-200 leading-short text-sm font-bold">
              8
            </span>
            <span className="text-gray-300 text-sm">Autores lidos</span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Bookmark className="text-green-100 h-8 w-8" />
          <p className="flex flex-col">
            <span className="text-gray-200 leading-short text-sm font-bold">
              Computação
            </span>
            <span className="text-gray-300 text-sm">Categoria mais lida</span>
          </p>
        </div>
      </section>
    </article>
  )
}
