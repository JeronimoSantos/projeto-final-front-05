
// Chamando à API
import { useEffect, useState } from "react";
import { api } from "@/lib/api-axios";
import { Vaga } from "../../../types/vagasType";

export default function ListaDeVagas() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarVagas() {
      try {
        const response = await api.get<Vaga[]>("/vagas");
        setVagas(response.data);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarVagas();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <ul>
      {vagas.map((vaga) => (
        <li key={vaga.id}>
          <strong>{vaga.titulo}</strong> - {vaga.empresa}
        </li>
      ))}
    </ul>
  );
}
