/** @type {import('tailwindcss').Config} */
import tailwindHamburgers from 'tailwind-hamburgers';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["CLTAbsans", "sans-serif"], // Adiciona a tua fonte
      },
    },
  },
  plugins: [
    tailwindHamburgers, 
    
  ],
};
