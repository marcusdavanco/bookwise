import { PersonalReviewCard } from '@/components/personal-review-card'
import { ReadingSummary } from '@/components/reading-summary'
import { SearchBar } from '@/components/searchbar'
import { Sidebar } from '@/components/sidebar'
import { User2 } from 'lucide-react'
// import { redirect } from 'next/navigation'

export default function Profile() {
  // redirect('/login')

  return (
    <main className="p-5 flex min-h-full">
      <Sidebar />
      <div className="min-w-[232px]" />
      <div className="flex gap-16 w-auto m-auto">
        <section>
          <div className="flex gap-3 mb-10 animate-fade-left">
            <User2 className="h-8 w-8 text-green-100" />
            <h2 className="text-2xl font-bold">Perfil</h2>
          </div>
          <SearchBar placeholder="Buscar livro avaliado" />
          <div className="flex flex-col gap-6">
            <PersonalReviewCard />
            <PersonalReviewCard />
            <PersonalReviewCard />
            <PersonalReviewCard />
          </div>
        </section>
        <section>
          <ReadingSummary />
        </section>
      </div>
    </main>
  )
}
