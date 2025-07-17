import Link from "next/link";
import React from "react";

export default function Navigation() {
    return (
        <nav className="flex justify-between">
            <ul className="flex items-center justify-center gap-2 text-2xl">
                <li>
                    <Link href="/" target="_self" title="Página Principal" className="text-emerald-400 dark:text-blue-100 font-mono hover:underline">Página Principal</Link>
                </li>
                <li>
                    <Link href="/login" target="_self" title="Login" className="text-emerald-400 dark:text-blue-100 font-mono hover:underline">Login</Link>
                </li>
                <li>
                    <Link href="/vagas" target="_self" title="Vagas" className="text-emerald-400 dark:text-blue-100 font-mono hover:underline">Vagas</Link>
                </li>
                <li>
                    <Link href="/candidaturas" target="_self" title="Candidaturas" className="text-emerald-400 dark:text-blue-100 font-mono hover:underline">Candidaturas</Link>
                </li>
                <li>
                    <Link href="/empresas" target="_self" title="Vagas" className="text-emerald-400 dark:text-blue-100 font-mono hover:underline">Empresas</Link>
                </li>
                <li>
                    <Link href="/contato" target="_self" title="Contato" className="text-emerald-400 dark:text-blue-100 font-mono hover:underline">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
