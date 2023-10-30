import { LatestReadingCard } from '@/components/latest-reading-card'
import { Sidebar } from '@/components/sidebar'
import { LineChart } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOption } from '../api/auth/[...nextauth]/route'
import { Ratings } from '@/components/ratings'
import { PopularBooks } from '@/components/PopularBooks'

export default async function Home() {
  const session = await getServerSession(authOption)

  return (
    <main className="p-5 flex min-h-full">
      <Sidebar />
      <div className="min-w-[232px]" />
      <div className="flex gap-16 mx-auto">
        <section className="min-w-[608px]">
          <div className="flex gap-3 mb-10 animate-fade-left">
            <LineChart className="h-8 w-8 text-green-100" />
            <h2 className="text-2xl font-bold ">Início</h2>
          </div>
          {session && (
            <div className="flex flex-col gap-4 mb-10">
              <LatestReadingCard />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <Ratings />
          </div>
        </section>
        <section className="flex flex-col min-w-[320px] w-[20rem] gap-3 mt-[4.5rem]">
          <PopularBooks />
        </section>
      </div>
    </main>
  )
}
