import React from "react";

// Define types for better type safety
interface TechStackItem {
    icon: string;
    name: string;
    category: string;
}

const TechStacksSection: React.FC = () => {
    // Move data to a separate file or constant for better organization
    const techStacks: TechStackItem[] = [
        { icon: "devicon-react-original", name: "React", category: "Frontend" },
        { icon: "devicon-nextjs-plain", name: "Next.js", category: "Frontend" },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            name: "Vite",
            category: "Frontend",
        },
        {
            icon: "devicon-typescript-plain",
            name: "TypeScript",
            category: "Frontend",
        },
        {
            icon: "devicon-tailwindcss-plain",
            name: "Tailwind CSS",
            category: "Frontend",
        },
        { icon: "devicon-nodejs-plain", name: "Node.js", category: "Backend" },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            name: "Python",
            category: "Backend",
        },
        {
            icon: "devicon-mysql-plain-wordmark",
            name: "MySQL",
            category: "Database",
        },
        { icon: "devicon-git-plain", name: "Git", category: "Tools" },
        { icon: "devicon-pytorch-plain", name: "PyTorch", category: "AI/ML" },
        {
            icon: "devicon-jupyter-plain",
            name: "Jupyter",
            category: "AI/ML",
        },
        { icon: "devicon-rust-plain", name: "Rust", category: "Systems" },
        {
            icon: "devicon-unrealengine-plain",
            name: "Unreal Engine",
            category: "Game Dev",
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
            name: "Go",
            category: "Backend",
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            name: "Python",
            category: "AI/ML",
        },
    ];

    // Group tech stacks by category
    const groupedTechStacks = techStacks.reduce(
        (acc, tech) => {
            if (!acc[tech.category]) {
                acc[tech.category] = [];
            }
            acc[tech.category].push(tech);
            return acc;
        },
        {} as Record<string, TechStackItem[]>
    );

    // Function to determine grid class based on tech count
    const getGridClass = (count: number): string => {
        if (count === 1) return "flex flex-wrap justify-center gap-8";
        if (count <= 2) return "flex flex-wrap justify-center gap-18";
        if (count <= 3) return "flex flex-wrap justify-center gap-28";
        return "grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5";
    };

    return (
        <section id="tech" className="flex min-h-screen items-center pt-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold">Tech Stacks</h1>
                </div>

                {Object.entries(groupedTechStacks).map(([category, techs]) => (
                    <div key={category} className="mb-16">
                        <h2 className="mb-8 text-center text-2xl font-bold">
                            {category}
                        </h2>

                        <div className={getGridClass(techs.length)}>
                            {techs.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
                                >
                                    <div className="mb-3 text-5xl md:text-6xl">
                                        {tech.icon.startsWith("http") ? (
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="h-12 w-12 md:h-16 md:w-16"
                                            />
                                        ) : (
                                            <i
                                                className={`${tech.icon} colored`}
                                            ></i>
                                        )}
                                    </div>
                                    <span className="text-center text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStacksSection;
