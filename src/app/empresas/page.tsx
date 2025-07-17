"use client"

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { api } from "@/lib/api-axios";
import { Empresa } from "../../../types/empresasType";

export default function Empresas() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarEmpresas() {
      try {
        const response = await api.get<Empresa[]>("/empresas");
        setEmpresas(response.data);
      } catch (error) {
        console.error("Erro ao buscar empresas:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarEmpresas();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen p-48 bg-gradient-to-tr from-green-300 via-gray-400 to-gray-500 dark:bg-gradient-to-tr dark:from-gray-500 dark:via-gray-700 dark:to-gray-800 scroll-smooth">
        <h3 className="text-6xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline">Empresas</h3>

        <section className="mt-8">
          {loading ? (
            <p>Carregando empresas...</p>
          ) : (
            <ul className="space-y-4">
              {empresas.map((empresa) => (
                <li key={empresa.id} className="p-4 bg-white rounded shadow dark:bg-gray-800">
                  <strong className="text-lg">{empresa.nome}</strong><br />
                  📧 {empresa.email} <br />
                  📞 {empresa.telefone} <br />
                  🧾 CNPJ: {empresa.cnpj}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
