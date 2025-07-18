export const API_CONFIG = {
  BASE_URL: "https://projeto-final-api-05.onrender.com",
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
  TOKEN_KEY: "token",
  USER_KEY: "user",
} as const;

export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/usuarios",
  REFRESH: "/auth/refresh",
} as const;

export const API_ENDPOINTS = {
  VAGAS: "/vagas",
  CANDIDATURAS: "/candidaturas",
  EMPRESAS: "/empresas",
  USUARIOS: "/usuarios",
} as const; 