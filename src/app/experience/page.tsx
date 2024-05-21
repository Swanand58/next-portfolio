"use client";

import React from "react";
import { Experience, experiences } from "../../../data/projects";
import { ExperienceCard } from "../_components/page";

const ExperiencePage: React.FC = () => {
  return (
    <main className="flex flex-wrap min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Work Experience
        </h1>
        <p className="text-justify mb-4">
          During my work experience, I have had the opportunity to work in
          diverse roles and projects that have significantly enriched my
          skillset and knowledge in the field of computer science. After
          completing two semesters of my Masters in Computer Science program at
          Rice University, I am currently interning at Nedd Technologies in
          Houston, Texas. Prior to my time in the US, I worked for nearly two
          years as a Software Engineer at HSBC Technology India. There, I
          designed and developed critical microservices and backend solutions,
          which significantly improved data accessibility and operational
          efficiency. My contributions were recognized with the 'Star Performer'
          Award in Q1, 2023. Additionally, I gained valuable experience during
          my undergraduate studies at Vishwakarma Institute of Technology. My
          internship at Optimum Data Analytics involved working on a deep
          learning project for document classification. These varied experiences
          have been instrumental in shaping my career and fueling my passion for
          technology, particularly in the areas of distributed systems, full
          stack development, and DevOps.
        </p>
        <div className="text-center mb-6">
          <button
            className=" text-white bg-gray-700 font-bold py-2 px-4 rounded hover:bg-slate-800 hover:text-slate-200"
            onClick={() => window.open("/Resume_SwanandKhonde.pdf", "_blank")}
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
