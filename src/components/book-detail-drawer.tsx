import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function BookDetailDrawer() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-full w-full bg-black/75" />
      <Dialog.Content className="fixed top-1/2 right-0 translate-y-[-50%]">
        <article className="bg-white min-h-screen min-w-[660px] ">
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Close>
            <X size={24} />
          </Dialog.Close>
          <Dialog.Description>Description</Dialog.Description>
        </article>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
