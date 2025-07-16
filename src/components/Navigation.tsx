import Link from "next/link";
import React from "react";

export default function Navigation() {
    return (
        <nav className="flex bg-amber-400">
            <ul className="flex items-center justify-center gap-1">
                <li>
                    <Link href="/" target="_self" title="Página Principal" className="text-black">Página Principal</Link>
                </li>
                <li>
                    <Link href="/login" target="_self" title="Login" className="text-black">Login</Link>
                </li>
                <li>
                    <Link href="/vagas" target="_self" title="Vagas" className="text-black">Vagas</Link>
                </li>
                <li>
                    <Link href="/candidaturas" target="_self" title="Candidaturas" className="text-black">Candidaturas</Link>
                </li>
                <li>
                    <Link href="/empresas" target="_self" title="Vagas" className="text-black">Vagas</Link>
                </li>
                <li>
                    <Link href="/contato" target="_self" title="Contato" className="text-black">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
