"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function UserInfo() {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Informações do Usuário
      </h3>
      
      <div className="space-y-2">
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Nome:</span> {user.nome}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Tipo:</span> {user.tipo}
        </p>
        {user.deficiencia && (
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Deficiência:</span> {user.deficiencia}
          </p>
        )}
      </div>
      
      <button
        onClick={logout}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Sair
      </button>
    </div>
  );
} 