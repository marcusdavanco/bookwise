import { BookReviewCard } from '@/components/book-review-card'
import { PopularBookCard } from '@/components/popular-book-card'
import { Sidebar } from '@/components/sidebar'
import { ChevronRight, LineChart } from 'lucide-react'

export default function Home() {
  return (
    <main className="p-5 flex min-h-full">
      <Sidebar />
      <div className="flex gap-16 m-auto">
        <section>
          <div className="flex gap-3 mb-10">
            <LineChart className="h-8 w-8 text-green-100" />
            <h2 className="text-2xl font-bold">Início</h2>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-sm">Avaliações mais recentes</span>
            <BookReviewCard />
            <BookReviewCard />
            <BookReviewCard />
          </div>
        </section>
        <section className="w-[20rem]">
          <div className='flex justify-between items-center h-[30px]'>
            <span className="text-sm">Livros populares</span>
            <button className="flex gap-2 text-sm text-purple-100 font-bold">Ver todos<ChevronRight className="text-purple-100 text-xs" /></button>
          </div>
          <PopularBookCard imageUrl='' />
          <PopularBookCard />
          <PopularBookCard />
          <PopularBookCard />
        </section>
      </div>
    </main>
  )
}
