import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//this library to support svg beacuse in vite i t doesnt do it by defult
import svgr from 'vite-plugin-svgr'
//always to add plugin in vite we do this
//this plugin to replace the ../ with @ from any folder
//and we add the plugins in the tsconfig.json
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr(),tsconfigPaths()],
})
