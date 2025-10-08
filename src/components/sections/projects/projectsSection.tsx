import ImageCard from "@components/imageCard/imageCardTechStack";
import Nexus_Local from "/images/Nexus_Local.jpg";
import portfolio from "/images/portFolioWebsite.png";

interface TechStackItem {
    icon: string;
    name: string;
}

interface Project {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
    techStack: TechStackItem[];
    link?: string;
}

function ProjectsSection() {
    const projects: Project[] = [
        {
            id: 1,
            src: portfolio,
            alt: "Snapshot of Portfolio Project",
            title: "JNCodes Portfolio",
            description:
                "Portfolio website for myself hosted on Cloudflare. Prioritizing and UX/UI experience of the end user.",

            techStack: [
                {
                    icon: "devicon-nodejs-plain colored",
                    name: "Node.js",
                },
                {
                    icon: "devicon-tailwindcss-plain colored",
                    name: "Tailwind CSS",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                    name: "Vite",
                },
                {
                    icon: "devicon-react-original colored",
                    name: "React",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
                    name: "Cloudflare",
                },
            ],
            link: "https://github.com/00y300/portfolio",
        },
        {
            id: 2,
            src: Nexus_Local,
            alt: "Snapshot of Nexus Local Project",
            title: "Nexus Local",
            description:
                "Senior Capstone Project: A project that allows local shops to have digital stores.",
            techStack: [
                {
                    icon: "devicon-nodejs-plain colored",
                    name: "Node.js",
                },
                { icon: "devicon-react-original colored", name: "React" },
                { icon: "devicon-nextjs-plain", name: "Next.js" },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                    name: "Vite",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
                    name: "Golang",
                },

                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
                    name: "MySQL",
                },
                {
                    icon: "devicon-tailwindcss-plain colored",
                    name: "Tailwind CSS",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg",
                    name: "OAuth 2.0",
                },
            ],
            link: "https://github.com/00y300/Nexus_Local",
        },
    ];
    return (
        <section id="projects" className="flex min-h-screen items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="mt-4 text-lg">
                    Projects I have done in my free time
                </p>
                {/* Render ImageCards for projects */}
                <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:justify-items-center md:grid-cols-2 lg:flex lg:justify-center">
                    {projects.map((project) => (
                        <ImageCard
                            key={project.id}
                            src={project.src}
                            alt={project.alt}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
