import Image from 'next/image'

import sidebarBackground from '../../public/sidebar_background.jpg'
import logoSmall from '../../public/logo_small.svg'
import Link from 'next/link'
import { LineChart, LogIn, Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-[232px] relative pt-10 px-[3.25rem] pb-6 ">
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
        <Link href="/" className="flex gap-3 font-bold text-gray-200">
          Fazer login
          <LogIn className="text-green-100 h-5 w-5" />
        </Link>
      </section>
    </aside>
  )
}
