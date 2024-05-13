"use client";
import Image from "next/image";
import { ProjectCards } from "../_components/page";
import { projects } from "../../../data/projects";

export default function Projects() {
  return (
    <main>
      <section>
        <div className="mb-6 mt-6 ml-6 mr-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold ">What I've built!</h1>
          </div>
          <div className="text-center gap-x-7 gap-y-7 mt-6 mb-6 ">
            <p className="text-lg font-semibold">
              Explore my collection of innovative coding projects! Here you'll
              find a variety of projects that I've built using Python,
              JavaScript (React and Node), Java, and C++.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {projects.map((project) => (
              <ProjectCards key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
