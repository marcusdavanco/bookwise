import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, Bookmark, Star, X } from 'lucide-react'
import { Card } from './card'
import book from '../../public/book.jpg'
import Image from 'next/image'
import { CommentCard } from './comment-card'
import { LoginDialog } from './login-dialog'
import { CommentFormCard } from './comment-form-card'

export function BookDetailDrawer() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 w-full bg-black/75" />

      <Dialog.Content className="fixed top-1/2 right-0 translate-y-[-50%] bg-gray-800 h-screen max-w-[660px] px-12 py-6 overflow-y-auto">
        <Dialog.Close className="relative top-0 left-full mb-4">
          <X size={24} color={'#8D95AF'} />
        </Dialog.Close>
        <Card className="px-8 py-6 gap-10 flex flex-col">
          <div className="flex gap-8">
            <Image
              src={book.src}
              height={242}
              width={171}
              alt="popular book name"
              className="rounded-[4px]"
            />
            <div className="flex flex-col justify-between ">
              <header className="flex flex-col gap-2">
                <p className="text-lg font-bold leading-[140%] text-gray-100">
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </p>
                <p className="text-md leading-[160%] text-gray-300">
                  Zeno Rocha
                </p>
              </header>
              <footer>
                <div className="flex gap-1">
                  <Star size={20} color="#8381D9" fill="#8381D9" />
                  <Star size={20} color="#8381D9" fill="#8381D9" />
                  <Star size={20} color="#8381D9" fill="#8381D9" />
                  <Star size={20} color="#8381D9" fill="#8381D9" />
                  <Star size={20} color="#8381D9" />
                </div>
                <p className="text-sm text-gray-400">3 avaliações</p>
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
                  Computação, educação
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BookOpen size={24} color="#50B2C0" />
              <div className="flex flex-col">
                <p className="text-gray-300 text-sm leading-[160%]">Páginas</p>
                <p className="text-gray-200 text-md leading-[140%] font-bold">
                  160
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
            <CommentFormCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </section>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
