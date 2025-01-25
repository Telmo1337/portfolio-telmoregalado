import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-telmoregalado/', // Adicione esta linha com o nome do seu repositório
  plugins: [react()],
})
