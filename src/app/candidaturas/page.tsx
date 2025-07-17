"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { api } from "@/lib/api-axios";

interface Candidatura {
  id: number;
  usuarioId: number;
  vagaId: number;
  status: string;
  createdAt: string; // atualizado para refletir o timestamp automático
}

function CriarCandidatura({ onNovaCandidatura }: { onNovaCandidatura: (nova: Candidatura) => void }) {
  const [usuarioId, setUsuarioId] = useState("");
  const [vagaId, setVagaId] = useState("");
  const [status, setStatus] = useState("pendente");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErro("");

    try {
      const response = await api.post("/candidaturas", {
        usuarioId: Number(usuarioId),
        vagaId: Number(vagaId),
        status,
      });
      onNovaCandidatura(response.data as Candidatura) ;
      setUsuarioId("");
      setVagaId("");
      setStatus("pendente");
    } catch (error) {
      setErro("Erro ao cadastrar candidatura.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded shadow mb-8 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Nova Candidatura</h2>
      <div>
        <label className="block mb-1 font-semibold">Usuário ID:</label>
        <input
          type="number"
          value={usuarioId}
          onChange={e => setUsuarioId(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Vaga ID:</label>
        <input
          type="number"
          value={vagaId}
          onChange={e => setVagaId(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Status:</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="pendente">Pendente</option>
          <option value="aprovado">Aprovado</option>
          <option value="rejeitado">Rejeitado</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Enviando..." : "Cadastrar"}
      </button>
      {erro && <p className="text-red-600 mt-2">{erro}</p>}
    </form>
  );
}

export default function Candidaturas() {
  const [candidaturas, setCandidaturas] = useState<Candidatura[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCandidaturas() {
      try {
        const response = await api.get("/candidaturas");
        setCandidaturas(response.data);
      } catch (error) {
        console.error("Erro ao buscar candidaturas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCandidaturas();
  }, []);

  async function atualizarStatus(id: number, novoStatus: string) {
    try {
      await api.patch(`/candidaturas/${id}`, { status: novoStatus });
      setCandidaturas(prev =>
        prev.map(c => (c.id === id ? { ...c, status: novoStatus } : c))
      );
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  async function deletarCandidatura(id: number) {
    if (!confirm("Tem certeza que deseja deletar esta candidatura?")) return;

    try {
      await api.delete(`/candidaturas/${id}`);
      setCandidaturas(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error("Erro ao deletar candidatura:", error);
    }
  }

  function handleNovaCandidatura(novaC: Candidatura) {
    setCandidaturas(prev => [novaC, ...prev]);
  }

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen p-12 bg-gradient-to-tr from-green-300 via-gray-400 to-gray-500 dark:bg-gradient-to-tr dark:from-gray-500 dark:via-gray-700 dark:to-gray-800 scroll-smooth">
        <h3 className="text-6xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline mb-12">
          Candidaturas
        </h3>

        <CriarCandidatura onNovaCandidatura={handleNovaCandidatura} />

        {loading ? (
          <p className="text-white">Carregando candidaturas...</p>
        ) : candidaturas.length === 0 ? (
          <p className="text-white">Nenhuma candidatura encontrada.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidaturas.map(candidatura => (
              <div
                key={candidatura.id}
                className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded shadow-md flex flex-col justify-between"
              >
                <div>
                  <p><strong>ID:</strong> {candidatura.id}</p>
                  <p><strong>Usuário:</strong> {candidatura.usuarioId}</p>
                  <p><strong>Vaga:</strong> {candidatura.vagaId}</p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <select
                      value={candidatura.status}
                      onChange={e => atualizarStatus(candidatura.id, e.target.value)}
                      className="border p-1 rounded"
                    >
                      <option value="pendente">Pendente</option>
                      <option value="aprovado">Aprovado</option>
                      <option value="rejeitado">Rejeitado</option>
                    </select>
                  </p>
                  <p><strong>Data:</strong> {new Date(candidatura.createdAt).toLocaleDateString()}</p>
                </div>
                <button
                  onClick={() => deletarCandidatura(candidatura.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded mt-4 hover:bg-red-700 transition"
                >
                  Deletar
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
