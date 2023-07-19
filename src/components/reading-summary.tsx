import { Avatar } from "./avatar";
import user from "../../public/user.jpg"
import { BookOpen, Bookmark, Contact, Library } from "lucide-react";

export function ReadingSummary() {
  return (
    <article>
      <section className="relative">
        <Avatar imageUrl={user.src} size={72} />
        <p>Cristofer Rosser</p>
        <p>member since 2010</p>
      </section>
      <div />
      <section>
        <div>
          <BookOpen />
          <p>
            <span>3853</span>
            <span>Páginas lidas</span>
          </p>
        </div>
        <div>
          <Library />
          <p>
            <span>10</span>
            <span>Livros avaliados</span>
          </p>
        </div>
        <div>
          <Contact />
          <p>
            <span>8</span>
            <span>Autores lidos</span>
          </p>
        </div>
        <div>
          <Bookmark />
          <p>
            <span>Computação</span>
            <span>Categoria mais lida</span>
          </p>
        </div>
      </section>
    </article>
  )
}