import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//this library to support svg beacuse in vite i t doesnt do it by defult
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
})
