/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MODE: "development" | "staging" | "production"
    readonly VITE_API_BASE: string
    readonly VITE_PK_STRIPE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
