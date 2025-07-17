'use client'

// Encapsular o provedor do next-themes
import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
