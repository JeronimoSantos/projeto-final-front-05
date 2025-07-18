"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              IncluiVaga
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
              Home
            </Link>
            <Link href="/vagas" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
              Vagas
            </Link>
            <Link href="/empresas" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
              Empresas
            </Link>
            <Link href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
              Contato
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Olá, {user?.nome}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
            
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                Home
              </Link>
              <Link href="/vagas" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                Vagas
              </Link>
              <Link href="/empresas" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                Empresas
              </Link>
              <Link href="/contato" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                Contato
              </Link>
              
              {isAuthenticated ? (
                <div className="px-3 py-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Olá, {user?.nome}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="block w-full mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="block px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
