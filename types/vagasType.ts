// Tipagem do rota vagas
export interface Vaga {
  id: number;
  titulo: string;
  descricao: string;
  empresa: string;
  local: string;
  salario: number;
  empresarioId: number
}
