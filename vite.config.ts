import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { presetUno, presetAttributify } from 'unocss'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetAttributify(), presetUno()],
    }),
  ],
})
