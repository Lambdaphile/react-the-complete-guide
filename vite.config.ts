import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsonfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsonfigPaths()]
  // resolve: {
  //   alias: [
  //     { find: '@actions', replacement: '/src/actions' },
  //     { find: '@components', replacement: '/src/components' },
  //     { find: '@constants', replacement: '/src/constants' },
  //     { find: '@containers', replacement: '/src/containers' },
  //     { find: '@contexts', replacement: '/src/context' },
  //     { find: '@hooks', replacement: '/src/hooks' },
  //     { find: '@projects', replacement: '/src/projects' },
  //     { find: '@reducers/*', replacement: '/src/reducers' },
  //     { find: '@utils', replacement: '/src/utils' }
  //   ]
  // }
})
