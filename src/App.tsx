import { useEffect, useState } from "react";
import "./index.css";
import NavigationBar from "@components/navigation/NavigationBar";
import ExperienceSection from "@components/sections/experience/experienceSection";
import TechStacksSection from "@components/sections/techStack/techStack";
import ProjectsSection from "@components/sections/projects/projectsSection";
import ContactSection from "@components/sections/contact/contactSection";
import Footer from "./components/sections/footer/footer";
import lightLogo from "/logos/lightDog.png";
import darkLogo from "/logos/darkDog.png";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(
        document.body.classList.contains("dark")
    );

    useEffect(() => {
        const updateTheme = () => {
            const isDark = document.body.classList.contains("dark");
            setIsDarkMode(isDark);

            // Update favicon
            const favicon = document.querySelector(
                "link[rel='icon']"
            ) as HTMLLinkElement;
            if (favicon) {
                favicon.href = isDark
                    ? "/logos/faviconDark.ico"
                    : "/logos/favicon.ico";
            }
        };

        // Initial update
        updateTheme();

        // Watch for theme changes
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <NavigationBar />
            <section
                id="home"
                className="flex min-h-screen items-center px-4 pt-20 md:px-6"
            >
                <div className="card container mx-auto max-w-4xl rounded-3xl px-8 py-8 md:px-16">
                    <img
                        src={isDarkMode ? darkLogo : lightLogo}
                        alt="Logo"
                        className="mx-auto h-32 w-32"
                    />
                    <h1 className="pt-3.5 text-center text-4xl font-bold">
                        Hi, I'm Jerry.
                    </h1>
                    <h2 className="text-center text-2xl font-semibold">
                        Engineer & Developer
                    </h2>
                    <p className="font-adelphe mx-auto mt-4 max-w-3xl text-center text-lg">
                        I am a recent graduate from Middle Georgia State
                        University, specializing in software engineering. My
                        expertise encompasses the development of CRUD web
                        applications and creating virtual experiences in
                        Fortnite with BMW, utilizing game engines to deliver
                        immersive experiences for diverse consumer audiences.
                        Additionally, I have a profound understanding of AI and
                        its strategic implementation in business contexts.
                    </p>
                </div>
            </section>
            <ExperienceSection />
            <ProjectsSection />
            <TechStacksSection />
            <ContactSection />
            <Footer />
        </>
    );
}
export default App;
