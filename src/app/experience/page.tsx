"use client";

import React from "react";
import { Experience, experiences } from "../../../data/experience";
import ExperienceCard from "../_components/experiencecard";
import posthog from "posthog-js";

const ExperiencePage: React.FC = () => {
  const handleResumeClick = (): void => {
    posthog.capture("Resume Clicked", {
      section: "Experience Page",
    });

    window.open(
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSrhr1qC4exfjwEk4TL6IC9ytSbM80i7hguPYR",
      "_blank"
    );
  };
  return (
    <main className="flex flex-wrap min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Work Experience</h1>
        <p className="text-left mb-4">
          During my work experience, I have had the opportunity to take on
          diverse roles and projects that have significantly enriched my
          skillset and knowledge in computer science. After completing two
          semesters of my Master’s in Computer Science program at Rice
          University, I interned at Nedd Technologies in Houston, Texas, where I
          developed an ESG platform from scratch. Prior to my time in the US, I
          worked for nearly two years as a Software Engineer at HSBC Technology
          India, designing and developing critical microservices and backend
          solutions that significantly improved data accessibility and
          operational efficiency. My contributions were recognized with the
          &quot;Star Performer&quot; Award in Q1, 2023. Currently, I have joined
          Ford Motor Company in the Advanced EV department, where I am
          contributing to full-stack projects and other internal initiatives.
          These varied experiences have been instrumental in shaping my career
          and fueling my passion for technology, particularly in distributed
          systems, full-stack development, and DevOps.
        </p>
        <div className="text-center mb-6 mt-8">
          <button
            className=" text-white bg-[rgb(51,67,101)] font-bold py-2 px-4 rounded hover:bg-slate-800 hover:text-slate-200"
            onClick={handleResumeClick}
          >
            Show Resume
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {experiences.map((exp: Experience) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;
