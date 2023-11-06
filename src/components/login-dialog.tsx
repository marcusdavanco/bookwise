import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { SignInButton } from './signin-button'

import githubIcon from '../../public/github-icon.svg'
import googleIcon from '../../public/google-icon.svg'

export function LoginDialog() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 w-full bg-black/50" />

      <Dialog.Content className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] py-14 px-18 bg-gray-700 w-[516px] flex flex-col justify-center items-center rounded-xl">
        <Dialog.Close className="fixed top-4 right-4">
          <X size={24} color={'#8D95AF'} />
        </Dialog.Close>
        <header className="mb-10">
          <p className="text-gray-200 text-md leading-[140%] font-bold">
            Faça login para deixar sua avaliação
          </p>
        </header>
        <div className="flex flex-col gap-4 min-w-[372px]">
          <SignInButton imageUrl={googleIcon.src} providerName="google" />
          <SignInButton
            imageUrl={githubIcon.src}
            providerName="github"
            disabled
          />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
