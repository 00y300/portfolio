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
    Row,
    Column,
    Tailwind,
} from "@react-email/components";

interface ThankYouEmailProps {
    userFirstName?: string;
    imageUrl?: string;
}

export const ThankYouEmail = ({
    userFirstName = "there",
    imageUrl = "",
}: ThankYouEmailProps) => {
    return (
        <Html>
            <Head />
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
                        </Section>
                        <Section className="pt-0">
                            <Row className="p-5 pb-0">
                                <Column>
                                    <Heading className="font-adelphe text-center text-3xl font-bold">
                                        Hi {userFirstName},
                                    </Heading>
                                    <Text className="font-adelphe mt-4 text-base">
                                        Thank you for reaching out! I've
                                        received your message and will get back
                                        to you as soon as possible.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>
                        <Section className="bg-gray-50 px-6 py-6">
                            <Text className="font-adelphe m-0 text-center text-xs leading-relaxed text-gray-600">
                                © 2025 | www.jncodes.pro
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

ThankYouEmail.PreviewProps = {
    userFirstName: "Jerry",
    imageUrl: "http://localhost:5173/src/assets/email/lightDog.png",
} as ThankYouEmailProps;

export default ThankYouEmail;
