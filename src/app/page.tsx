'use client'

import { CarouselDemo } from "@/components/CarouselNoticias";
import { CarouselDemo1 } from "@/components/CarouselCuriosidades";
import Navigation from "@/components/Navigation";
import { ModeToggle }  from '@/components/ThemeSwitcher';
export default function HomePage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-gradient-to-tr from-green-300 via-gray-400 to-gray-500 dark:bg-gradient-to-tr dark:from-gray-500 dark:via-gray-700 dark:to-gray-800  p-3.5 scroll-smooth">
        <header className="flex flex-row justify-between p-1 w-full">
          <ModeToggle />
          <Navigation />
        </header>

        <section className="flex gap-10 justify-around items-center mt-10 p-24 shadow-2xl">
          <h3 className="text-7xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase text-center">Mercado de Trabalho Inclusivo para PCDs</h3>
          <img src={"/imgNoticias/logo-pcd.jpeg"} className="w-94 h-94 object-cover rounded-full"/>
        </section>

        <section className="flex justify-around items-center gap-15 mt-28 p-10">
          <CarouselDemo />

          <section className="flex flex-col gap-12">
            <h3 className="text-6xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline">Notícias</h3>
            <p className="text-4xl font-extralight">Notícias atuais e relevantes sobre o mercado de trabalho para Pessoas com Deficiência (PcDs) no Brasil,
             com links para você acessar e se aprofundar em cada assunto.
          </p>
          </section>
        </section>

        <section className="flex justify-around items-center mt-30 gap-10">
          <p></p>
          <CarouselDemo1 />
        </section>
    </main>
    </>
  )
}
 