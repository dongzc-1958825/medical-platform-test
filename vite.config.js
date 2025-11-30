import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/medical-platform-test/', // 重要：设置基础路径
  build: {
    outDir: 'docs' // 重要：构建输出到docs目录
  }
})