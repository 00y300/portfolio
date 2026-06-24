import "@react-email/render";

interface ThankYouEmailProps {
    userFirstName?: string;
    imageUrl?: string;
    fontUrl?: string;
}

export const ThankYouEmail = ({
    userFirstName = "there",
    imageUrl,
    fontUrl,
}: ThankYouEmailProps) => {
    const firstName =
        userFirstName.charAt(0).toUpperCase() +
        userFirstName.slice(1).toLowerCase();

    return (
        <html>
            <head>
                <style>{`
                    @font-face {
                        font-family: 'Adelphe';
                        src: url('${fontUrl}') format('woff');
                        font-display: swap;
                    }
                    .font-adelphe {
                        font-family: 'Adelphe', sans-serif !important;
                    }
                `}</style>
            </head>
            <body
                style={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: "#ffffff",
                    fontFamily: "Arial, Helvetica, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "none",
                        overflow: "hidden",
                        maxHeight: 0,
                        maxWidth: 0,
                        opacity: 0,
                    }}
                >
                    Thank you for contacting us
                </div>
                <div
                    style={{
                        maxWidth: "24rem",
                        margin: "0 auto",
                        backgroundColor: "#ffffff",
                        borderRadius: "0.5rem",
                        border: "1px solid #e5e7eb",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ padding: "1.5rem" }}>
                        <img
                            src={imageUrl}
                            alt="Logo"
                            style={{
                                width: "6rem",
                                height: "6rem",
                                display: "block",
                                margin: "0 auto",
                            }}
                        />
                        <h1
                            style={{
                                fontFamily: "'Adelphe', sans-serif",
                                margin: "1rem 0 0",
                                fontSize: "1.875rem",
                                fontWeight: "700",
                                textAlign: "center",
                            }}
                        >
                            Hi {firstName},
                        </h1>
                        <p
                            style={{
                                fontFamily: "'Adelphe', sans-serif",
                                marginTop: "1rem",
                                fontSize: "1rem",
                                lineHeight: "1.5rem",
                            }}
                        >
                            Thank you for reaching out! I've received your
                            message and will get back to you as soon as
                            possible. I look forward to connecting with you soon
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "1.5rem",
                            marginTop: "1.5rem",
                            backgroundColor: "#f9fafb",
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                fontSize: "0.75rem",
                                lineHeight: "1rem",
                                color: "#4b5563",
                                textAlign: "center",
                            }}
                        >
                            © 2025 | https://jncodes.pro
                        </p>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default ThankYouEmail;
