"use client"

import Header from "@/components/Header";
import { useState } from "react";
import { api } from "@/lib/api-axios";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await api.post("/contato", {
        nome,
        email,
        mensagem,
      });
      setEnviado(true);
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
    }
  }

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen p-48 bg-gradient-to-tr from-green-300 via-gray-400 to-gray-500 dark:bg-gradient-to-tr dark:from-gray-500 dark:via-gray-700 dark:to-gray-800 scroll-smooth">
        <h3 className="text-6xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline">Contato</h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-8 bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-lg"
        >
          <label className="flex flex-col font-semibold">
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="p-2 rounded mt-1 text-black"
              required
            />
          </label>

          <label className="flex flex-col font-semibold">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded mt-1 text-black"
              required
            />
          </label>

          <label className="flex flex-col font-semibold">
            Mensagem:
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="p-2 rounded mt-1 text-black"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>

          {enviado && <p className="text-green-600 font-semibold mt-2">Mensagem enviada com sucesso!</p>}
        </form>
      </main>
    </>
  );
}
