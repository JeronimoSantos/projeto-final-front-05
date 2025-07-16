"use client"

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
    return (
        <main className="w-full h-[100svh] flex flex-col items-center justify-center text-center bg-green-700">
            <h1 className="text-4xl font-bold text-white">Página não encontrada</h1>
            <DotLottieReact src="/lottie/notFoundGat.lottie" loop autoplay className="w-2/3"/>
            <Link href={"/"} className=" text-2xl text-white font-bold hover:underline cursor-pointer">Volta para Pagina Principal</Link>
        </main>
    )
}
