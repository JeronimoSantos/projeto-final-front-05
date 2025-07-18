// lib/api-axios.ts
import axios from "axios";
import { API_CONFIG } from "@/config/api";

export const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

// Interceptor para adicionar token JWT automaticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(API_CONFIG.TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de autenticação
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado ou inválido
      localStorage.removeItem(API_CONFIG.TOKEN_KEY);
      localStorage.removeItem(API_CONFIG.USER_KEY);
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
