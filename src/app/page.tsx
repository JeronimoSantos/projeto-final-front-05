'use client'

import Link from "next/link"
import Navigation from "@/components/Navigation";
export default function HomePage() {
  return (
    <>
      <main className="flex min-h-screen bg-amber-50 flex-col items-center justify-between p-24">
        <header>
          <Navigation />
        </header>

        <section>
          
        </section>
    </main>

    <footer className="flex items-center justify-center">
      <h3>Desenvolvido com comprometimento com impacto social, acessibilidade e inclusão digital.</h3>
    </footer>
    </>
  )
}
 