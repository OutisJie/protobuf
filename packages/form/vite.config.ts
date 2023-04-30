import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

import { fileURLToPath } from 'url'
import { resolve } from 'pathe'

export default defineConfig({
	plugins: [vue(), vueJsx(), dts(), ],
	build: {
		lib: {
			name: 'form',
			entry: fileURLToPath(new URL('./src/index.tsx', import.meta.url)),
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
			external: ['vue'],
			output: {
                dir: 'dist',
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
			},
		},
        minify: false,
       
	},
    resolve: {
        alias: {
            '/@': resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        exclude: ['vue'],
    },
})