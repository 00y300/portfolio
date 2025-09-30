import JobCard from "@components/jobCard/jobCard";
import { jobsData } from "@components/sections/experience/jobData";

const ExperienceSection = () => {
    return (
        <section id="experience" className="flex min-h-screen items-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">Experience Section</h1>
                {/* <p className="mt-4 text-lg">Professional Experience</p> */}

                <div className="mt-8">
                    {jobsData.map((job, index) => (
                        <JobCard
                            key={index}
                            title={job.title}
                            company={job.company}
                            period={job.period}
                            description={job.description
                                .split(". ")
                                .map((s) => s.trim() + ".")}
                            image={job.imagesrc}
                            imageDescription={job.imageDescription}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
