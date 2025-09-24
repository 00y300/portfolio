import React from "react";

interface JobCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  period,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">
        {company} • {period}
      </p>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
};

export default JobCard;
