import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    // Explicitly disable SSR for tests
    report: ['html'],
    server: {
      deps: {
        inline: ['.*']
      }
    }
  }
})
