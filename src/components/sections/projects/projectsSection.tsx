import ImageCard from "@components/imageCard/imageCardTechStack";
import BMW from "@assets/logos/BMW.svg";

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
}

function ProjectsSection() {
    // Define project data with tech stacks
    const projects: Project[] = [
        {
            // TODO: Will Change to something more meaningful for now it will stay like this
            id: 1,
            src: BMW,
            alt: "BMW Logo",
            title: "BMW Project",
            description: "A project involving BMW and game engine development",
            techStack: [
                { icon: "devicon-react-original colored", name: "React" },
                { icon: "devicon-nextjs-plain", name: "Next.js" },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                    name: "Vite",
                },
            ],
        },
    ];

    return (
        <section id="projects" className="flex min-h-screen items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="mt-4 text-lg">
                    Projects I have done in free time
                </p>
                {/* Render ImageCards for projects */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ImageCard
                            key={project.id}
                            src={project.src}
                            alt={project.alt}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
