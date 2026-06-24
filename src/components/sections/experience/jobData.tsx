import BMW from "/logos/BMW.svg";
import Prisma from "/logos/PrismaHealth.svg";
import AFL from "/logos/AFL.svg";

export interface Job {
    title: string;
    company: string;
    period: string;
    description: string[];
    imagesrc: string;
    imageDescription: string;
}

export const jobsData: Job[] = [
    {
        title: "Software Engineer",
        company: "Prisma Health",
        period: "Feb 2026 – Present",
        description: [
            "Built UiPath RPA workflows to automate healthcare operations — patient intake, scheduling, and billing — cutting manual data entry by 60% and accelerating cycle times across departments.",
            "Engineered automated data migration pipelines between clinical and administrative systems in UiPath Orchestrator, enforcing data integrity with validation rules and exception-handling, backed by SQLite for lightweight local persistence and runtime logging.",
        ],
        imagesrc: Prisma,
        imageDescription: "Prisma Health Logo",
    },
    {
        title: "Software Engineer (Contractor)",
        company: "AFL Telecommunications",
        period: "Apr 2025 – Jan 2026",
        description: [
            "Developed a C# .NET Core RFID tracking system with Impinj R700 readers to automate package handling, capturing real-time EPC tag values to uniquely identify 10,000+ assets daily at sub-second latency.",
            "Designed the backend to persist and validate records in MS SQL Server, filtering duplicates at scale — saving the company $100,000 in development costs through streamlined automation.",
            "Maintained an Inductive Automation Ignition SCADA system, tuning gateway performance and tag histories for long-term analytics.",
            "Wrote Visual Basic macros in Excel to automate tactical scheduling, helping manufacturing plants plan job-processing workflows and improve throughput.",
        ],
        imagesrc: AFL,
        imageDescription: "AFL Telecommunications Logo",
    },
    {
        title: "Research Software Engineer",
        company: "BMW Group",
        period: "Dec 2021 – Dec 2024",
        description: [
            "Led XR/AR/VR and AI ideation, strategy, design, PoCs, and prototyping for global business applications, partnering with cross-functional teams to ship immersive 3D experiences.",
            "Built point cloud processing pipelines in Python with Gaussian Splatting, cutting virtual factory costs by $100,000/m²; deployed at scale on AWS (EC2, S3) with CI/CD.",
            "Developed interactive 3D visualization web apps with Three.js, React, TypeScript, and Tailwind CSS, with automated testing.",
            "Applied PyTorch, NumPy, Pandas, and OpenCV for data preprocessing, analytics, and computer vision powering AI-driven spatial modeling.",
        ],
        imagesrc: BMW,
        imageDescription: "BMW Logo",
    },
];
