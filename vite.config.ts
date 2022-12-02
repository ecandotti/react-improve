import { defineConfig, loadEnv } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "")

    return {
        define: {
            __APP_ENV__: env.APP_ENV,
        },
        plugins: [react()],
        server: {
            host: true,
            port: 3001,
        },
        resolve: {
            alias: {
                src: path.resolve("src/"),
            },
        },
    }
})
