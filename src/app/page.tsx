'use client'

import Navigation from "@/components/Navigation";
import { ModeToggle }  from '@/components/ThemeSwitcher';
export default function HomePage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-amber-50 dark:bg-gray-900 p-3.5">
        <header className="flex flex-row justify-between w-full">
          <h3 className="text-2xl font-mono text-gray-600">Mercado de Trabalho Inclusivo para PCDs</h3>
          <ModeToggle />

          <section className="flex flex-col items-center justify-center">
            <Navigation />
          </section>
        </header>

        <section>
          <div className="mt-8 p-6 bg-white-100 dark:bg-gray-400 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Este é um card de exemplo</h2>
          <p className="mt-2">Ele também muda de cor!</p>
        </div>
        </section>
    </main>

    <footer className="flex items-center justify-center">
      <h3 className="text-gray-500">Desenvolvido com comprometimento com impacto social, acessibilidade e inclusão digital.</h3>
    </footer>
    </>
  )
}
 