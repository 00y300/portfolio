import { Resend } from "resend";
import ThankYouEmail from "../../src/assets/email/MyEmail";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export async function onRequestPost(context: {
    request: Request;
    env: Env;
}): Promise<Response> {
    const { request, env } = context;

    if (!env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set in environment");
        return new Response(
            JSON.stringify({
                message: "Server configuration error",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    try {
        const resend = new Resend(env.RESEND_API_KEY);
        const body: ContactFormData = await request.json();
        const { firstName, lastName, email, message } = body;

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

        // Send notification email to admin
        const adminEmail = await resend.emails.send({
            from: "adminMail@jncodespro",
            to: env.ADMIN_EMAIL,
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
        });

        // Send thank you email to user using React Email template
        // Pass the EMAIL_IMAGE_URL from env to the template
        const thankYouEmail = await resend.emails.send({
            from: "DoNotReply@jncodes.pro",
            to: email,
            subject: "Thanks for reaching out!",
            react: ThankYouEmail({
                userFirstName: firstName,
                imageUrl: env.EMAIL_IMAGE_URL,
            }),
        });

        return new Response(
            JSON.stringify({
                message: "Email sent successfully",
                data: {
                    adminEmail,
                    thankYouEmail,
                },
            }),
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

export async function onRequest(): Promise<Response> {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
    });
}
