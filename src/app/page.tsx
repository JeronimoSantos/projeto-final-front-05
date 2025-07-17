'use client'

import { CarouselNoticias } from "@/components/CarouselNoticias";
import { CarouselCuriosidades } from "@/components/CarouselCuriosidades";
import Navigation from "@/components/Navigation";
import { ModeToggle }  from '@/components/ModeToggle';
export default function HomePage() {

  
  return (
    <>
      <main className="flex flex-col min-h-screen bg-gradient-to-tr from-green-300 via-gray-400 to-gray-500 dark:bg-gradient-to-tr dark:from-gray-500 dark:via-gray-700 dark:to-gray-800  p-3.5 scroll-smooth">
        <header className="flex flex-row justify-between p-8 fixed top-0 left-0 w-full z-50 shadow-md bg-gray-500 dark:bg-gray-800">
          <ModeToggle />
          <Navigation />
        </header>

        <section className="flex flex-row gap-10 justify-around items-center mt-15 p-24 shadow-2xl">
          <section className="flex flex-col gap-2">
            <h2 className="text-8xl font-extrabold text-emerald-700 dark:text-blue-300 uppercase text-center">IncluiVaga</h2>
            <h3 className="text-7xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase text-center">Mercado de Trabalho Inclusivo para PCDs</h3>
          </section>
            <img src={"/imgNoticias/logo-IncluiVaga4.png"} className="w-94 h-94 object-cover rounded-full"/>
        </section>

        <section className="flex justify-around items-center gap-15 mt-28 p-10">
          <CarouselNoticias />

          <section className="flex flex-col gap-12">
            <h3 className="text-6xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline">Notícias</h3>
            <p className="text-4xl font-extralight">Notícias atuais e relevantes sobre o mercado de trabalho para Pessoas com Deficiência (PcDs) no Brasil,
              com links para você acessar e se aprofundar em cada assunto.
            </p>
          </section>
        </section>

        <section className="flex justify-around items-center mt-30 gap-20 mr-10">
          <section className="flex flex-col justify-end items-end gap-12">
            <h3 className="text-6xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline">Curiosidades</h3>
            <p className="text-4xl font-extralight text-end">Curiosidades e inovações sobre Pessoas com Deficiência (PcDs) apresentando inovação e soluções concretas, nacionais e internacionais com links para você explorar mais a fundo.
            </p>
          </section>
          <CarouselCuriosidades />
        </section>
    </main>
    </>
  )
}
 