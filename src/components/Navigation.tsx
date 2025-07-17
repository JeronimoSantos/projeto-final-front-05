import Link from "next/link";
import React from "react";

export default function Navigation() {
    return (
        <nav className="flex justify-between">
            <ul className="flex items-center justify-center gap-2 text-2xl">
                <li>
                    <Link href="/" target="_self" title="Página Principal" className="text-emerald-400 font-mono">Página Principal</Link>
                </li>
                <li>
                    <Link href="/login" target="_self" title="Login" className="text-emerald-400 font-mono">Login</Link>
                </li>
                <li>
                    <Link href="/vagas" target="_self" title="Vagas" className="text-emerald-400 font-mono">Vagas</Link>
                </li>
                <li>
                    <Link href="/candidaturas" target="_self" title="Candidaturas" className="text-emerald-400 font-mono">Candidaturas</Link>
                </li>
                <li>
                    <Link href="/empresas" target="_self" title="Vagas" className="text-emerald-400 font-mono">Vagas</Link>
                </li>
                <li>
                    <Link href="/contato" target="_self" title="Contato" className="text-emerald-400 font-mono">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
