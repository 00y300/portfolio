// src/types.d.ts
export {};

declare global {
    interface Env {
        RESEND_API_KEY: string;
        EMAIL_IMAGE_URL: string;
        ADMIN_EMAIL: string;
    }
}
