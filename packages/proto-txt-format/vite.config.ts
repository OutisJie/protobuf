import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { fileURLToPath } from 'url'
import { resolve } from 'pathe'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      name: 'form',
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'index.mjs'
          case 'cjs':
            return 'index.cjs'
          case 'iife':
            return 'index.js'
          default:
            return 'index.js'
        }
      },
    },
    watch: {
      include: [resolve(__dirname, 'src')],
    },

    rollupOptions: {
      output: {
        dir: 'dist',
        exports: 'named',
      },
    },
    minify: false,
  },
})
