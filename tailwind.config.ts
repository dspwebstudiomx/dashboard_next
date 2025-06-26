import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Azul principal
          light: '#3B82F6',   // Variante clara
          dark: '#1E40AF',    // Variante oscura
        },
        secondary: {
          DEFAULT: '#F59E42', // Naranja principal
          light: '#FFD8A8',   // Variante clara
          dark: '#B26B1F',    // Variante oscura
        },
        accent: '#10B981',     // Verde acento
        neutral: '#F3F4F6',    // Gris neutro
      },
    },
  },
  plugins: [],
};

export default config;
