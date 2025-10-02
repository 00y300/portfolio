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
            className="max-w-md cursor-pointer overflow-hidden rounded bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={link ? () => window.open(link, "_blank") : undefined}
        >
            <img className="h-48 w-full object-cover" src={src} alt={alt} />
            <div className="px-6 py-4">
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="text-base text-gray-700">{description}</p>

                {/* Display tech stack icons */}
                {techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center rounded-full bg-gray-200 p-2"
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
