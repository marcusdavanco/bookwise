import { BookReviewCard } from '@/components/bookReviewCard'
import { Sidebar } from '@/components/sidebar'
import { LineChart } from 'lucide-react'

export default function Home() {
  return (
    <main className="p-5 flex min-h-full">
      <Sidebar />
      <section>
        <div>
          <LineChart className="h-8 w-8" />
          <h2>Início</h2>
        </div>
        <span>Avaliações mais recentes</span>
        <div>
          <BookReviewCard />
          <BookReviewCard />
          <BookReviewCard />
        </div>
      </section>
      <section>

      </section>
    </main>
  )
}
