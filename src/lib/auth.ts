// lib/auth.ts
import { api } from "./api-axios";
import { User, LoginResponse, RegisterData } from "@/types/auth";
import { API_CONFIG, AUTH_ENDPOINTS } from "@/config/api";

// Função para salvar token
function saveToken(token: string) {
  localStorage.setItem(API_CONFIG.TOKEN_KEY, token);
  // Salvar também nos cookies para o middleware
  document.cookie = `token=${token}; path=/; max-age=86400`; // 24 horas
}

// Função para remover token
function removeToken() {
  localStorage.removeItem(API_CONFIG.TOKEN_KEY);
  localStorage.removeItem(API_CONFIG.USER_KEY);
  // Remover dos cookies
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

// Função para fazer login
export async function login(email: string, senha: string): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(AUTH_ENDPOINTS.LOGIN, {
    email,
    senha,
  });
  
  const { token, user } = response.data;
  
  // Salvar token e dados do usuário
  saveToken(token);
  localStorage.setItem(API_CONFIG.USER_KEY, JSON.stringify(user));
  
  return response.data;
}

// Função para fazer registro
export async function register(data: RegisterData): Promise<void> {
  await api.post(AUTH_ENDPOINTS.REGISTER, data);
}

// Função para fazer logout
export function logout(): void {
  removeToken();
  window.location.href = "/login";
}

// Função para verificar se o usuário está autenticado
export function isAuthenticated(): boolean {
  const token = localStorage.getItem(API_CONFIG.TOKEN_KEY);
  return !!token;
}

// Função para obter dados do usuário atual
export function getCurrentUser(): User | null {
  const userStr = localStorage.getItem(API_CONFIG.USER_KEY);
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

// Função para obter o token atual
export function getToken(): string | null {
  return localStorage.getItem(API_CONFIG.TOKEN_KEY);
}

// Função para verificar se o token está expirado
export function isTokenExpired(): boolean {
  const token = getToken();
  if (!token) return true;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch {
    return true;
  }
} 