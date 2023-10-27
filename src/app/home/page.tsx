import { LatestReadingCard } from '@/components/latest-reading-card'
import { Sidebar } from '@/components/sidebar'
import { ChevronRight, LineChart } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOption } from '../api/auth/[...nextauth]/route'
import { BookCard } from '@/components/book-card'
import { Ratings } from '@/components/ratings'
import { PopularBooks } from '@/components/PopularBooks'

export default async function Home() {
  const session = await getServerSession(authOption)

  return (
    <main className="p-5 flex min-h-full">
      <Sidebar />
      <div className="min-w-[232px]" />
      <div className="flex gap-16 m-auto">
        <section>
          <div className="flex gap-3 mb-10">
            <LineChart className="h-8 w-8 text-green-100" />
            <h2 className="text-2xl font-bold">Início</h2>
          </div>
          {session && (
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex justify-between gap-3 ">
                <span className="mb-1 text-sm">Sua última leitura</span>
                <button className="flex gap-2 text-sm text-purple-100 hover:brightness-125 transition duration-200 ease-out hover:ease-in font-bold">
                  Ver todos
                  <ChevronRight className=" text-xs" />
                </button>
              </div>
              <LatestReadingCard />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-sm">Avaliações mais recentes</span>
            <Ratings />
          </div>
        </section>
        <section className="flex flex-col w-[20rem] gap-3 mt-[4.5rem]">
          <div className="flex justify-between items-center h-[30px]">
            <span className="text-sm">Livros populares</span>
            <button className="flex gap-2 text-sm text-purple-100 hover:brightness-125 transition duration-200 ease-out hover:ease-in font-bold">
              Ver todos
              <ChevronRight className="text-xs" />
            </button>
          </div>
          <PopularBooks />
        </section>
      </div>
    </main>
  )
}
