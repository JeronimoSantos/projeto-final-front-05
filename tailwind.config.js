/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita o dark mode baseado em classe
  content: [
    // Garanta que .ts e .tsx estão aqui!
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
