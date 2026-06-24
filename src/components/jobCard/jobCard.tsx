import React from "react";

interface JobCardProps {
    title: string;
    company: string;
    period: string;
    description: string[];
    image: string;
    imageDescription: string;
}

const JobCard: React.FC<JobCardProps> = ({
    title,
    company,
    period,
    description,
    image,
    imageDescription,
}) => {
    return (
        <div className="card rounded-lg p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="flex w-full items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <img
                    src={image}
                    alt={imageDescription}
                    className="h-10 w-auto max-w-[160px] shrink-0 object-contain md:h-12 md:max-w-[200px]"
                />
            </div>
            <p className="mt-1 opacity-70">
                {company} • {period}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 opacity-90">
                {description
                    .filter((line) => line.trim() !== "")
                    .map((line, i) => (
                        <li key={i}>{line}</li>
                    ))}
            </ul>
        </div>
    );
};

export default JobCard;
