"use client";
import ProjectCards from "../_components/projectcards";
import { projects } from "../../../data/projects";
import posthog from "posthog-js";

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
          <div className="text-center mt-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">What I&apos;ve Built</h1>
          </div>
          <div className="text-left mt-6 mb-6">
            <p className="text-sm sm:text-lg font-semibold px-2">
              Explore my collection of innovative coding projects! Here you&apos;ll
              find a variety of projects that I&apos;ve built using Python,
              JavaScript/ Typescript (React and Node), Java, and C++.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCards
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
