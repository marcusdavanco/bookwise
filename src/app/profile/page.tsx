import { PersonalRatings } from '@/components/PersonalRatings'
import { PersonalReviewCard } from '@/components/personal-review-card'
import { ReadingSummary } from '@/components/reading-summary'
import { SearchBar } from '@/components/searchbar'
import { Sidebar } from '@/components/sidebar'
import { User2 } from 'lucide-react'
import { getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Profile() {
  const session = getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="p-5 flex min-h-full">
      <Sidebar />
      <div className="min-w-[232px]" />
      <div className="flex gap-16 w-auto mx-auto">
        <section className="min-w-[624px]">
          <div className="flex gap-3 mb-10 animate-fade-left">
            <User2 className="h-8 w-8 text-green-100" />
            <h2 className="text-2xl font-bold">Perfil</h2>
          </div>
          <PersonalRatings />
        </section>
        <section className="min-w-[308px]">
          <ReadingSummary />
        </section>
      </div>
    </main>
  )
}
