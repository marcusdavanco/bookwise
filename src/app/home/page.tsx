import { BookReviewCard } from '@/components/bookReviewCard'
import { Sidebar } from '@/components/sidebar'
import { LineChart } from 'lucide-react'

export default function Home() {
  return (
    <main className="p-5 flex min-h-full">
      <Sidebar />
      <div className="flex gap-16 place-content-center">
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
        <section>

        </section>
      </div>
    </main>
  )
}
