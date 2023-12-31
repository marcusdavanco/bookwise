import Image from 'next/image'

import logo from '../../../public/logo.svg'
import hero from '../../../public/hero_image.jpg'

import githubIcon from '../../../public/github-icon.svg'
import googleIcon from '../../../public/google-icon.svg'
import guestIcon from '../../../public/guest-icon.svg'
import Link from 'next/link'
import { SignInButton } from '@/components/signin-button'
import { getServerSession } from 'next-auth'
import { authOption } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Login() {
  const session = await getServerSession(authOption)

  if (session) {
    redirect('/home')
  }

  return (
    <main className="p-5 flex min-h-full">
      <section className="hidden md:block w-[598px] relative ">
        <Image
          height="58"
          width="232"
          alt=""
          src={logo}
          className="absolute top-1/2 left-1/2 translate-x-[-50%] z-10"
        />
        <Image alt="" src={hero} quality={100} className="rounded-md" fill />
      </section>
      <section className="w-[350px] m-auto ">
        <header className=" mb-10">
          <h2 className="text-2xl font-bold leading-short">Boas vindas!</h2>
          <p className="text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </header>
        <div className="flex flex-col gap-4">
          <SignInButton imageUrl={googleIcon.src} providerName="google" />
          <SignInButton
            imageUrl={githubIcon.src}
            providerName="github"
            disabled
          />
          <Link
            href="/home"
            className="flex justify-start items-center bg-gray-600 hover:bg-gray-500 px-6 py-5 rounded-[8px] text-gray-200 font-bold transition-all duration-300 ease-out hover:ease-in"
          >
            <Image
              height="32"
              width="32"
              alt=""
              src={guestIcon}
              className="mr-5"
            />
            Acessar como visitante
          </Link>
        </div>
      </section>
    </main>
  )
}
