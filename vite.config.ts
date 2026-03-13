import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tanstackStart({
      tsr: {
        routesDirectory: './src/routes',
        generatedRouteTree: './src/routeTree.gen.ts',
      },
      server: {
        preset: 'node-server',
      },
    }),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
})
