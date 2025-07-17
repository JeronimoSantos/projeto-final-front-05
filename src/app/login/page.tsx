"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { api } from "@/lib/api-axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [modo, setModo] = useState<"login" | "registro">("login");

  // Login
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Registro
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState<"PCD" | "empresa">("PCD");
  const [deficiencia, setDeficiencia] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setMensagem("");
    setErro("");

    try {
      const response = await api.post("/auth/login", { email, senha });
      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
        setMensagem("Login realizado com sucesso!");
        router.push("/vagas");
      } else {
        setErro("Token não recebido.");
      }
    } catch (error: any) {
      console.error("Erro no login:", error);
      setErro("Email ou senha incorretos.");
    }
  }

  async function handleRegistro(event: React.FormEvent) {
    event.preventDefault();
    setMensagem("");
    setErro("");

    try {
      const response = await api.post("/usuarios", {
        nome,
        email,
        senha,
        tipo,
        deficiencia: tipo === "PCD" ? deficiencia : null,
      });

      setMensagem("Usuário registrado com sucesso! Faça login.");
      setModo("login"); // volta pra login após registro
    } catch (error: any) {
      console.error("Erro no registro:", error);
      setErro(error?.response?.data?.message || "Erro ao registrar.");
    }
  }

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen p-10 sm:p-48 bg-gradient-to-tr from-green-300 via-gray-400 to-gray-500 dark:from-gray-500 dark:via-gray-700 dark:to-gray-800">
        <h3 className="text-5xl font-extrabold text-emerald-600 dark:text-blue-200 uppercase hover:underline mb-10">
          {modo === "login" ? "Login" : "Registro"}
        </h3>

        <form
          onSubmit={modo === "login" ? handleLogin : handleRegistro}
          className="bg-white dark:bg-gray-900 p-8 rounded shadow-md max-w-md w-full"
        >
          {modo === "registro" && (
            <>
              <label className="block mb-4">
                <span className="text-gray-700 dark:text-gray-300">Nome:</span>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded border border-gray-300"
                />
              </label>

              <label className="block mb-4">
                <span className="text-gray-700 dark:text-gray-300">Tipo:</span>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as "PCD" | "empresa")}
                  className="mt-1 block w-full px-4 py-2 rounded border border-gray-300"
                >
                  <option value="PCD">PCD</option>
                  <option value="empresa">Empresa</option>
                </select>
              </label>

              {tipo === "PCD" && (
                <label className="block mb-4">
                  <span className="text-gray-700 dark:text-gray-300">
                    Tipo de deficiência:
                  </span>
                  <input
                    type="text"
                    value={deficiencia}
                    onChange={(e) => setDeficiencia(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 rounded border border-gray-300"
                  />
                </label>
              )}
            </>
          )}

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 rounded border border-gray-300"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 dark:text-gray-300">Senha:</span>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 rounded border border-gray-300"
            />
          </label>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded w-full"
          >
            {modo === "login" ? "Entrar" : "Registrar"}
          </button>

          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
            {modo === "login" ? (
              <>
                Não tem conta?{" "}
                <button
                  type="button"
                  onClick={() => setModo("registro")}
                  className="text-blue-600 underline"
                >
                  Cadastre-se
                </button>
              </>
            ) : (
              <>
                Já tem conta?{" "}
                <button
                  type="button"
                  onClick={() => setModo("login")}
                  className="text-blue-600 underline"
                >
                  Faça login
                </button>
              </>
            )}
          </p>

          {mensagem && <p className="text-green-600 mt-4">{mensagem}</p>}
          {erro && <p className="text-red-500 mt-4">{erro}</p>}
        </form>
      </main>
    </>
  );
}
