import Image from 'next/image'

import sidebarBackground from '../../public/sidebar_background.jpg'
import logoSmall from '../../public/logo_small.svg'
import Link from 'next/link'
import { LineChart, LogIn, LogOutIcon, Search } from 'lucide-react'
import { Avatar } from './avatar'

import user from '../../public/user.jpg'

export function Sidebar() {
  return (
    <aside className="w-[232px] custom-fixed-height py-5 fixed top-[1.25rem] bottom-0 pt-10 px-[3.25rem] pb-6 ">
      <Image
        src={sidebarBackground}
        alt=""
        quality={100}
        fill
        className="rounded-xl"
      />
      <Link href="/">
        <Image
          src={logoSmall}
          alt=""
          height="32"
          width="128"
          className="absolute top-10 left-1/2 translate-x-[-50%] z-10"
        />
      </Link>
      <section className="flex flex-col z-10 absolute top-[8.5rem] gap-4">
        <Link href="/" className="flex gap-3 py-6 pl-4 relative ">
          <span className="absolute -left-1  h-[1.5rem] top-1/2 translate-y-[-50%] w-1 rounded bg-gradient-to-t from-blue-50 to-green-50" />
          <LineChart className="h-6 w-6" />
          Início
        </Link>
        <Link
          href="/"
          className="flex gap-3 py-6 pl-4 text-gray-400 hover:text-gray-200 transition duration-300 ease-out hover:ease-in"
        >
          <Search className="h-6 w-6" />
          Explorar
        </Link>
      </section>
      <section className="flex z-10 absolute bottom-6 ">
        {false && (
          <Link href="/" className="flex gap-3 font-bold text-gray-200">
            Fazer login
            <LogIn className="text-green-100 h-5 w-5" />
          </Link>
        )}
        {true && (
          <div className="flex gap-3 items-center">

            <Link href="/profile" className="flex gap-3 items-center">
              <Avatar imageUrl={user.src} size={32} />
              <span className="text-sm text-gray-200">Cristofer</span>
            </Link>
            <Link href="/login">
              <LogOutIcon className="h-7 w-7" color="#f75a68" />
            </Link>

          </div>
        )}
      </section>
    </aside>
  )
}
