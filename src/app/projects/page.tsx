"use client";
import Image from "next/image";
import ProjectCards from "../_components/projectcards";
import { projects } from "../../../data/projects";

export default function Projects() {
  return (
    <main className="p-4 sm:p-6">
      <section>
        <div className="mb-8">
          <div className="text-center mt-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">What I've built</h1>
          </div>
          <div className="text-left mt-6 mb-6">
            <p className="text-sm sm:text-lg font-semibold px-2">
              Explore my collection of innovative coding projects! Here you'll
              find a variety of projects that I've built using Python,
              JavaScript/ Typescript (React and Node), Java, and C++.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCards key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
