/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
}

export default defineConfig({
  test: vitestConfig.test,
  plugins: [react()],
  base: './',
})
