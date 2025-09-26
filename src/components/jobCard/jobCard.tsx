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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <img
          src={image}
          alt={imageDescription}
          className="w-auto h-auto max-w-xs md:max-w-md pl-5 lg:max-w-3xl max-h-24 object-contain"
        />
      </div>
      <p className="text-gray-600 mt-2">
        {company} • {period}
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
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
