"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api-axios";
import { Vaga } from "../../../types/vagasType";

export default function ListaDeVagas() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregarVagas() {
      try {
        const response = await api.get<Vaga[]>("/vagas");
        setVagas(response.data);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
        setErro("Erro ao carregar vagas. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }

    carregarVagas();
  }, []);

  if (loading) return <p className="text-white mt-4">Carregando vagas...</p>;
  if (erro) return <p className="text-red-500 mt-4">{erro}</p>;

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {vagas.map((vaga) => (
        <div
          key={vaga.id}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-emerald-600 dark:text-blue-200">
            {vaga.titulo}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {vaga.descricao}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            <strong>Empresa:</strong> {vaga.empresa}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Local:</strong> {vaga.local}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Salário:</strong> R$ {vaga.salario}
          </p>
        </div>
      ))}
    </div>
  );
}
