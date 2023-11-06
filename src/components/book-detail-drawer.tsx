import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, Bookmark, Star, X } from 'lucide-react'
import { Card } from './card'
import book from '../../public/book.jpg'
import Image from 'next/image'
import { CommentCard } from './comment-card'
import { LoginDialog } from './login-dialog'
import { CommentFormCard } from './comment-form-card'
import { BookWithAverageRating } from './book-card'
import { Stars } from './stars'

interface BookDetailDrawerProps {
  book: BookWithAverageRating
}

export function BookDetailDrawer({ book }: BookDetailDrawerProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 w-full bg-black/75" />

      <Dialog.Content className="fixed top-1/2 right-0 translate-y-[-50%] bg-gray-800 h-screen max-w-[660px] px-12 py-6 overflow-y-auto scrollbar-thumb-gray-600 scrollbar-track-gray-700 scrollbar-thin scrollbar-thumb-rounded-full">
        <Dialog.Close className="relative top-0 left-full mb-4">
          <X size={24} color={'#8D95AF'} />
        </Dialog.Close>
        <Card className="px-8 py-6 gap-10 flex flex-col">
          <div className="flex gap-8">
            <Image
              src={book.cover_url.replace('public', '')}
              height={242}
              width={171}
              alt={`cover of ${book.name}`}
              className="rounded-[4px]"
            />
            <div className="flex flex-col justify-between ">
              <header className="flex flex-col gap-2">
                <p className="text-lg font-bold leading-[140%] text-gray-100">
                  {book.name}
                </p>
                <p className="text-md leading-[160%] text-gray-300">
                  {book.author}
                </p>
              </header>
              <footer>
                <Stars rate={book.rate} />
                <p className="text-sm text-gray-400">
                  {book.ratings.length} avaliações
                </p>
              </footer>
            </div>
          </div>
          <div className="flex border-t border-gray-600 pt-6 pb-4 gap-[60px]">
            <div className="flex items-center gap-4">
              <Bookmark size={24} color="#50B2C0" />
              <div className="flex flex-col">
                <p className="text-gray-300 text-sm leading-[160%]">
                  Categoria
                </p>
                <p className="text-gray-200 text-md leading-[140%] font-bold">
                  {book.categories.map((c) => c.category?.name).join(', ')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BookOpen size={24} color="#50B2C0" />
              <div className="flex flex-col">
                <p className="text-gray-300 text-sm leading-[160%]">Páginas</p>
                <p className="text-gray-200 text-md leading-[140%] font-bold">
                  {book.total_pages}
                </p>
              </div>
            </div>
          </div>
        </Card>
        <section className="flex flex-col w-full gap-3 mt-10">
          <div className="flex justify-between items-center h-[30px]">
            <span className="text-sm leading-[160%] text-gray-200">
              Avaliações
            </span>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="flex gap-2 text-md text-purple-100 hover:brightness-125 transition duration-200 ease-out hover:ease-in font-bold">
                  Avaliar
                </button>
              </Dialog.Trigger>
              <LoginDialog />
            </Dialog.Root>
          </div>
          <div className="flex flex-col gap-3">
            <CommentFormCard bookId={book.id} />
            {book.ratings.map((rating) => (
              <CommentCard key={rating.id} {...rating} />
            ))}
          </div>
        </section>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
