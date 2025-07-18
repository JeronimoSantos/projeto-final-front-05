"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { login as authLogin, register as authRegister, logout as authLogout, getCurrentUser, isAuthenticated } from "@/lib/auth";
import { User, AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há um usuário logado ao carregar a aplicação
    const checkAuth = () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser();
        setUser(currentUser);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, senha: string) => {
    try {
      const response = await authLogin(email, senha);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (data: any) => {
    try {
      await authRegister(data);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authLogout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
} 