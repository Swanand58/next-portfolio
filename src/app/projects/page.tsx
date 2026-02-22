"use client";

import posthog from "posthog-js";
import { ProjectCard } from "@/components/features/project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  const handleProjectClick = (projectTitle: string): void => {
    posthog.capture("Project Clicked", {
      project: projectTitle,
    });
  };

  return (
    <main className="p-4 sm:p-6">
      <section>
        <div className="mb-8">
          <div className="mb-6 mt-4 text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              What I&apos;ve Built
            </h1>
          </div>
          <div className="mb-6 mt-6 text-left">
            <p className="px-2 text-sm font-semibold sm:text-lg">
              Explore my collection of innovative coding projects! Here
              you&apos;ll find a variety of projects that I&apos;ve built using
              Python, JavaScript/TypeScript (React and Node), Java, and C++.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                {...project}
                key={project.title}
                onClick={() => handleProjectClick(project.title)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
