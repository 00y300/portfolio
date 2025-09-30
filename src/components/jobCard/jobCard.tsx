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
        <div className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="flex w-full items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <img
                    src={image}
                    alt={imageDescription}
                    className="h-auto max-h-24 w-auto max-w-xs object-contain pl-5 md:max-w-md lg:max-w-3xl"
                />
            </div>
            <p className="text-gray-600">
                {company} • {period}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
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
