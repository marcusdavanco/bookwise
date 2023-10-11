import { BookCard } from '@/components/book-card'
import { PersonalReviewCard } from '@/components/personal-review-card'
import { SearchBar } from '@/components/searchbar'
import { Sidebar } from '@/components/sidebar'
import { TagButton } from '@/components/tagButton'
import { Search } from 'lucide-react'
// import { redirect } from 'next/navigation'

export default function Profile() {
  // redirect('/login')

  return (
    <main className="p-5 flex min-h-full ">
      <Sidebar />
      <div className="min-w-[232px]" />
      <div className="flex gap-16 w-full mx-auto justify-center">
        <section className="flex flex-col w-[996px] 2xl:w-[1328px] gap-10">
          <div className="flex justify-between">
            <div className="flex gap-3 mb-10 items-center">
              <Search className="h-8 w-8 text-green-100" />
              <h2 className="text-2xl font-bold">Explorar</h2>
            </div>

            <div className="flex w-[433px]">
              <SearchBar placeholder="Buscar livro ou autor" />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <TagButton active={true} text="Tudo" />
            {Array.from({ length: 15 }, (_, index) => index).map((index, i) => (
              <TagButton key={index} text="Category" />
            ))}
          </div>

          <div className="grid grid-cols-3 2xl:grid-cols-4 gap-5 my-2">
            {Array.from({ length: 15 }, (_, index) => index).map((index, i) => (
              <BookCard key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
