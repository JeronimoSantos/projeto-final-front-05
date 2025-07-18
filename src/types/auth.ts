export interface User {
  id: string;
  nome: string;
  email: string;
  tipo: "PCD" | "empresa";
  deficiencia?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterData {
  nome: string;
  email: string;
  senha: string;
  tipo: "PCD" | "empresa";
  deficiencia?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, senha: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
} 