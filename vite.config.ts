import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.PARSE_APPLICATION_ID': JSON.stringify(env.PARSE_APPLICATION_ID),
      'process.env.PARSE_HOST_URL': JSON.stringify(env.PARSE_HOST_URL),
      'process.env.PARSE_JAVASCRIPT_KEY': JSON.stringify(env.PARSE_JAVASCRIPT_KEY),
    },
    plugins: [react()],
  }
})
