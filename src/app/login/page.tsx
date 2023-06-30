import Image from "next/image";

import logo from '../../../public/logo.svg'
import hero from '../../../public/hero_image.jpg'

export default function Login() {
  return (
    <main className="p-5 flex min-h-full" >
      <section className='w-[598px] relative '>
        <Image height="58" width="232" alt="" src={logo} className="absolute top-1/2 left-1/2 translate-x-[-50%] z-10" />
        <Image alt="" src={hero} quality={100} className="rounded-md" fill />
      </section>
      <section className="w-[350px] m-auto">
        <header>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>
        </header>
        <div >
          <button>Entrar com Google</button>
          <button>Entrar com GitHub</button>
          <button>Acessar como visitante</button>
        </div>


      </section>
    </main>
  )
}