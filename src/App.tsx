import "./index.css";
import NavigationBar from "./components/navigation/NavigationBar";
import ExperienceSection from "./components/sections/experience/experienceSection";
import TechStacksSection from "./components/sections/techStack/techStack";

function App() {
    return (
        <>
            <NavigationBar />
            <section id="home" className="flex min-h-screen items-center pt-20">
                <div className="container mx-auto rounded-3xl bg-gray-300 px-4">
                    <h1 className="text-center text-4xl font-bold">
                        Welcome!!
                    </h1>
                    <h2 className="mt-4 text-center text-lg">
                        Hi, I'm Jerry Nava
                    </h2>

                    <p className="mt-4 text-center text-lg">
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
            <TechStacksSection />
            <section
                id="contact"
                className="flex min-h-screen items-center pt-20"
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold">Contact Section</h1>
                    <p className="mt-4 text-lg">Get in touch with me!</p>
                </div>
            </section>
        </>
    );
}

export default App;
