import React from "react";

interface TechStackItem {
    icon: string;
    name: string;
    category: string;
    /** Icons that are dark/monochrome and vanish on a dark background.
     *  When true, they get inverted (and a slight brightness bump) in dark mode. */
    invertOnDark?: boolean;
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TechStacksSection: React.FC = () => {
    const techStacks: TechStackItem[] = [
        // ---- Frontend ----
        {
            icon: `${CDN}/react/react-original.svg`,
            name: "React",
            category: "Frontend",
        },
        {
            icon: `${CDN}/nextjs/nextjs-original.svg`,
            name: "Next.js",
            category: "Frontend",
            invertOnDark: true,
        },
        {
            icon: `${CDN}/vitejs/vitejs-original.svg`,
            name: "Vite",
            category: "Frontend",
        },
        {
            icon: `${CDN}/typescript/typescript-original.svg`,
            name: "TypeScript",
            category: "Frontend",
        },
        {
            icon: `${CDN}/javascript/javascript-original.svg`,
            name: "JavaScript",
            category: "Frontend",
        },
        {
            icon: `${CDN}/tailwindcss/tailwindcss-original.svg`,
            name: "Tailwind CSS",
            category: "Frontend",
        },
        {
            icon: `${CDN}/html5/html5-original.svg`,
            name: "HTML5",
            category: "Frontend",
        },
        {
            icon: `${CDN}/css3/css3-original.svg`,
            name: "CSS3",
            category: "Frontend",
        },
        {
            icon: `${CDN}/threejs/threejs-original.svg`,
            name: "Three.js",
            category: "Frontend",
            invertOnDark: true,
        },

        // ---- Backend ----
        {
            icon: `${CDN}/nodejs/nodejs-original.svg`,
            name: "Node.js",
            category: "Backend",
        },
        {
            icon: `${CDN}/python/python-original.svg`,
            name: "Python",
            category: "Backend",
        },
        { icon: `${CDN}/go/go-original.svg`, name: "Go", category: "Backend" },
        {
            icon: `${CDN}/csharp/csharp-original.svg`,
            name: "C#",
            category: "Backend",
        },
        {
            icon: `${CDN}/java/java-original.svg`,
            name: "Java",
            category: "Backend",
        },

        // ---- Systems ----
        {
            icon: `${CDN}/cplusplus/cplusplus-original.svg`,
            name: "C++",
            category: "Systems",
        },
        { icon: `${CDN}/c/c-original.svg`, name: "C", category: "Systems" },
        {
            icon: `${CDN}/rust/rust-original.svg`,
            name: "Rust",
            category: "Systems",
            invertOnDark: true,
        },
        {
            icon: `${CDN}/lua/lua-original.svg`,
            name: "Lua",
            category: "Systems",
        },
        {
            icon: "https://www.svgrepo.com/show/373541/cuda.svg",
            name: "CUDA",
            category: "Systems",
        },
        {
            icon: `${CDN}/cmake/cmake-original.svg`,
            name: "CMake",
            category: "Systems",
        },

        // ---- AI/ML ----
        {
            icon: `${CDN}/pytorch/pytorch-original.svg`,
            name: "PyTorch",
            category: "AI/ML",
        },
        {
            icon: `${CDN}/numpy/numpy-original.svg`,
            name: "NumPy",
            category: "AI/ML",
        },
        {
            icon: `${CDN}/pandas/pandas-original.svg`,
            name: "Pandas",
            category: "AI/ML",
            invertOnDark: true,
        },
        {
            icon: `${CDN}/opencv/opencv-original.svg`,
            name: "OpenCV",
            category: "AI/ML",
        },
        {
            icon: `${CDN}/scikitlearn/scikitlearn-original.svg`,
            name: "scikit-learn",
            category: "AI/ML",
        },

        // ---- 3D & XR ----
        {
            icon: `${CDN}/unrealengine/unrealengine-original.svg`,
            name: "Unreal Engine",
            category: "3D & XR",
            invertOnDark: true,
        },
        {
            icon: `${CDN}/unity/unity-original.svg`,
            name: "Unity",
            category: "3D & XR",
            invertOnDark: true,
        },

        // ---- Database ----
        {
            icon: `${CDN}/sqlite/sqlite-original.svg`,
            name: "SQLite",
            category: "Database",
        },
        {
            icon: `${CDN}/mysql/mysql-original-wordmark.svg`,
            name: "MySQL",
            category: "Database",
        },
        {
            icon: `${CDN}/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg`,
            name: "MS SQL Server",
            category: "Database",
        },

        // ---- Cloud & DevOps ----
        {
            icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
            name: "AWS (EC2, S3)",
            category: "Cloud & DevOps",
            invertOnDark: true,
        },
        {
            icon: `${CDN}/cloudflare/cloudflare-original.svg`,
            name: "Cloudflare",
            category: "Cloud & DevOps",
        },
        {
            icon: `${CDN}/linux/linux-original.svg`,
            name: "Linux",
            category: "Cloud & DevOps",
        },
        {
            icon: `${CDN}/git/git-original.svg`,
            name: "Git",
            category: "Cloud & DevOps",
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo-perforce-icon-reg.svg",
            name: "Perforce",
            category: "Cloud & DevOps",
        },
        {
            icon: `${CDN}/github/github-original.svg`,
            name: "GitHub Actions",
            category: "Cloud & DevOps",
            invertOnDark: true,
        },

        // ---- Automation & Security ----
        {
            icon: "https://www.svgrepo.com/show/443513/brand-uipath.svg",
            name: "UiPath",
            category: "Automation & Security",
            invertOnDark: true,
        },
        {
            icon: `${CDN}/oauth/oauth-original.svg`,
            name: "OAuth 2.0",
            category: "Automation & Security",
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

                        {/* One consistent, centered grid for every category */}
                        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-12 gap-y-10">
                            {techs.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group flex w-20 flex-col items-center transition-transform duration-200 hover:scale-110 md:w-24"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className={`h-14 w-14 object-contain md:h-16 md:w-16 ${
                                                tech.invertOnDark
                                                    ? "dark:brightness-0 dark:invert"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    <span className="mt-3 text-center text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
