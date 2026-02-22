"use client";

import posthog from "posthog-js";
import { ExperienceCard } from "@/components/features/experience-card";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experience";
import { RESUME_URL } from "@/lib/constants";

export default function ExperiencePage() {
  const handleResumeClick = (): void => {
    posthog.capture("Resume Clicked", {
      section: "Experience Page",
    });

    window.open(RESUME_URL, "_blank");
  };

  return (
    <main className="min-h-screen flex-wrap p-8">
      <div className="container mx-auto">
        <h1 className="mb-6 text-center text-3xl font-bold">Work Experience</h1>
        <p className="mb-4 text-left">
          During my work experience, I have had the opportunity to take on
          diverse roles and projects that have significantly enriched my
          skillset and knowledge in computer science. After completing two
          semesters of my Master&apos;s in Computer Science program at Rice
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

        <div className="mb-6 mt-8 text-center">
          <Button onClick={handleResumeClick}>Show Resume</Button>
        </div>

        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </main>
  );
}
