import Image from 'next/image'

import sidebarBackground from '../../../public/sidebar_background.jpg'
import logoSmall from '../../../public/logo_small.svg'
import Link from 'next/link'
import { LineChart, LogIn, Search, User2 } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOption } from '../../app/api/auth/[...nextauth]/route'
import { SignOutButton } from './components/signout-button'
import { UserName } from './components/username'
import { NavLink } from '../nav-link'

export async function Sidebar() {
  const session = await getServerSession(authOption)

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
        <NavLink href="/home">
          <LineChart className="h-6 w-6" />
          Início
        </NavLink>
        <NavLink href="/explore">
          <Search className="h-6 w-6" />
          Explorar
        </NavLink>
        {session && (
          <NavLink href="/profile">
            <User2 className="h-6 w-6" />
            Perfil
          </NavLink>
        )}
      </section>
      <section className="flex z-10 absolute bottom-6 ">
        {!session ? (
          <Link href="/" className="flex gap-3 font-bold text-gray-200">
            Fazer login
            <LogIn className="text-green-100 h-5 w-5" />
          </Link>
        ) : (
          <div className="flex gap-3 items-center">
            <UserName />
            <SignOutButton />
          </div>
        )}
      </section>
    </aside>
  )
}
