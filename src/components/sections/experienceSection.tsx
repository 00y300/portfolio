import JobCard from "../jobCard/jobCard";

const ExperienceSection = () => {
  const jobs = [
    {
      title: "Researcher/Software Engineer",
      company: "BMW",
      period: "2021 - 2025",
      description:
        "• Developed XR, AR, VR, AI technology ideation, strategy, design, POTs (Proof of Technology), POCs (Proof of Concept), and prototypes to the global business.\n• Collaborated with global teams to design and deploy 3D experiences that increased BMW brand awareness\n• Helped BMW virtual factory planners to reduce cost ($100,000 per m².) in building point clouds from a third party using Gaussian Splats and Python.\n• Develop webpages that enable the visualization of 3D models utilizing JavaScript libraries such as ThreeJS, React, Angular, and TailwindCSS. This development was conducted with automated testing methodologies.\n• Develop and utilize soft skills in AI and Data Science, particularly in computer vision analysis. Standard Python packages like PyTorch, NumPy, and Pandas can be employed for this purpose.",
    },
  ];

  return (
    <section id="experience" className="pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Experience Section</h1>
        <p className="mt-4 text-lg">Professional Experience</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              company={job.company}
              period={job.period}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
