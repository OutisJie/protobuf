import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { fileURLToPath } from 'url'
import { resolve } from 'pathe'

const entry = '../src/index.ts'

export default defineConfig({
  plugins: [dts({ copyDtsFiles: true })],
  build: {
    lib: {
      name: 'protos',
      entry: fileURLToPath(new URL(entry, import.meta.url)),
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
        exports: 'named',
        dir: 'dist/both',
      },
    },
    minify: false,
  },
})