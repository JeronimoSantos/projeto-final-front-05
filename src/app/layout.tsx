import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark Mode App",
  description: "Exemplo com Next.js e Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
