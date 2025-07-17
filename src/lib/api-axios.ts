// lib/api-axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://projeto-final-api-05.onrender.com", // ou a URL base correta da sua API
});
