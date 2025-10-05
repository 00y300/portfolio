import { onRequestPost } from "../functions/api/contact.ts";

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url);

        if (url.pathname === "/api/contact" && request.method === "POST") {
            return await onRequestPost({ request, env });
        }

        return new Response("Not found", { status: 404 });
    },
};
