import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      target: "http://localhost:8080", // 프록시 대상 주소
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""), // 선택적으로 경로 재작성
    },
  },
})
