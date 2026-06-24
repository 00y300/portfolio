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
            id: 4,
            src: "https://www.svgrepo.com/show/373541/cuda.svg",
            alt: "CUDA Learning kernel optimization projects",
            title: "CUDA Learning",
            description:
                "A collection of CUDA projects exploring GPU kernel optimization patterns from Programming Massively Parallel Processors (Hwu, Kirk, El Hajj): tiled convolution, 3D stencils, parallel reduction, prefix sum, and tiled GEMM. Built with CMake and a reproducible Nix flake dev environment (nvcc, clangd), tested on an RTX 5090 (Blackwell, sm_120) with CUDA Toolkit 13.",
            techStack: [
                {
                    icon: "https://www.svgrepo.com/show/373541/cuda.svg",
                    name: "CUDA",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
                    name: "C++",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg",
                    name: "CMake",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nixos/nixos-original.svg",
                    name: "Nix Flakes",
                },
            ],
            link: "https://github.com/00y300/CudaLearning",
        },
        {
            id: 3,
            src: portfolio,
            alt: "Datacenter PUE Forecasting",
            title: "Datacenter PUE Forecasting",
            description:
                "Built ML pipelines to forecast and classify Power Usage Effectiveness (PUE) for the NREL Energy Systems Integration Facility. Developed forecasting pipelines at 5min, 1hr, and 24hr horizons, plus a multiclass classification pipeline for efficiency tier detection and anomaly flagging. Applied walk-forward cross-validation to simulate monthly retraining.",
            techStack: [
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                    name: "Python",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
                    name: "PyTorch",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
                    name: "NumPy",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
                    name: "scikit-learn",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
                    name: "SQLite",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nixos/nixos-original.svg",
                    name: "Nix Flakes",
                },
            ],
            link: "https://github.com/00y300/datacenter-pue-forecasting",
        },
        {
            id: 1,
            src: portfolio,
            alt: "Snapshot of Portfolio Project",
            title: "JNCodes Portfolio",
            description:
                "Personal portfolio built with React 19, TypeScript, Vite, and Tailwind CSS v4. Features transactional email via Resend with React Email templating, and a serverless backend deployed on Cloudflare Workers via Wrangler.",
            techStack: [
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                    name: "React",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                    name: "TypeScript",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                    name: "Tailwind CSS",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                    name: "Vite",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
                    name: "Cloudflare Workers",
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
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                    name: "Node.js",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                    name: "React",
                },
                {
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                    name: "Next.js",
                },
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
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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
                <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
