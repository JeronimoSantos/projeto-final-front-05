"use client"

import Header from "@/components/Header";
import ListaDeVagas from "./Axios";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Vagas() {
    return (
        <ProtectedRoute>
            <Header />
            <main className="flex flex-col min-h-screen p-48 bg-gradient-to-tr from-green-300 via-gray-400 to-gray-500 dark:bg-gradient-to-tr dark:from-gray-500 dark:via-gray-700 dark:to-gray-800 scroll-smooth">
                <h3 className="text-6xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline">Vagas</h3>

                <section>
                    <ListaDeVagas /> 
                </section>
            </main>
        </ProtectedRoute>
    )
}
