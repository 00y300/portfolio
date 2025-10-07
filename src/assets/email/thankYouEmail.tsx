// @ts-ignore
import React from "react";
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";

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
    return (
        <Html>
            <Head>
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
            </Head>
            <Tailwind>
                <Body className="bg-white font-sans">
                    <Preview>Thank you for contacting us</Preview>
                    <Container className="font-adelphe mx-auto max-w-xl overflow-hidden rounded-lg border border-gray-200">
                        <Section className="bg-white p-6">
                            <Img
                                src={imageUrl}
                                alt="Logo"
                                className="mx-auto h-24 w-24"
                            />
                            <Heading className="font-adelphe mt-4 text-center text-3xl font-bold">
                                Hi{" "}
                                {userFirstName.charAt(0).toUpperCase() +
                                    userFirstName.slice(1)}
                                ,
                            </Heading>
                            <Text className="font-adelphe mt-4 text-base">
                                Thank you for reaching out! I've received your
                                message and will get back to you as soon as
                                possible. I look forward to connecting with you
                                soon
                            </Text>
                        </Section>
                        <Section className="bg-gray-50 px-6 py-6">
                            <Text className="font-adelphe m-0 text-center text-xs leading-relaxed text-gray-600">
                                © 2025 | https://jncodes.pro
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ThankYouEmail;
