import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthPage = request.nextUrl.pathname === '/login'
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/vagas') || 
                          request.nextUrl.pathname.startsWith('/candidaturas') ||
                          request.nextUrl.pathname.startsWith('/empresas')

  // Se está em uma rota protegida e não tem token, redireciona para login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Se está na página de login e já tem token, redireciona para vagas
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/vagas', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/vagas/:path*',
    '/candidaturas/:path*',
    '/empresas/:path*',
    '/login'
  ]
} 