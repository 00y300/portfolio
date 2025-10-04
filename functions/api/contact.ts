import { Resend } from "resend";

interface Env {
    RESEND_API_KEY: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
    const { request, env } = context;

    try {
        // Initialize Resend with API key from Cloudflare environment
        const resend = new Resend(env.RESEND_API_KEY);

        const { firstName, lastName, email, message } = await request.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return new Response(
                JSON.stringify({
                    message:
                        "Missing required fields: firstName, lastName, email, message",
                }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "onboarding@resend.dev",
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
        });

        return new Response(
            JSON.stringify({ message: "Email sent successfully", data }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to send email",
                error: error instanceof Error ? error.message : "Unknown error",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}

// Handle non-POST requests
export async function onRequest() {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
    });
}
