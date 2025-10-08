import React from "react";

interface TechStackItem {
    icon: string;
    name: string;
}

interface ImageCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    techStack?: TechStackItem[];
    link?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
    src,
    alt,
    title,
    description,
    techStack = [],
    link,
}) => {
    return (
        <div
            className="card max-w-md transform-gpu cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:shadow-xl"
            onClick={link ? () => window.open(link, "_blank") : undefined}
        >
            <img
                className="h-48 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                src={src}
                alt={alt}
            />
            <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="text-base opacity-80">{description}</p>

                {techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-700"
                            >
                                {tech.icon.startsWith("http") ? (
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-6 w-6"
                                    />
                                ) : (
                                    <i className={`${tech.icon} text-lg`}></i>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageCard;
