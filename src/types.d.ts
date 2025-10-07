// src/types.d.ts
export {};

declare global {
    interface Env {
        RESEND_API_KEY: string;
        RESOURCE_URL: string;
        ADMIN_EMAIL: string;
    }
}
