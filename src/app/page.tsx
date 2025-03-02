"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SocialCard, Skills, WorkExperience } from "./_components/page";
import ProjectCards from "./_components/projectcards";
import ArticleCard from "./_components/articlecard";
import ImageCarousel from "./_components/imagecarousel";
import { projects } from "../../data/projects";
import { carouselImages } from "../../data/images";
import { articles } from "../../data/article";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";
import posthog from "posthog-js";

export const dynamic = "force-dynamic";

const Home: React.FC = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);
  const router = useRouter();

  const toggleArticles = () => {
    setShowAllArticles(!showAllArticles);
  };

  const displayedArticles = showAllArticles ? articles : articles.slice(0, 2);
  const displayedProjects = projects.slice(0, 3);

  const handleProjectClick = (projectTitle: string): void => {
    posthog.capture("Project Clicked", {
      project: projectTitle,
    });
  };

  return (
    <main className=" min-h-screen p-4 sm:p-8">
      <section className="flex gap-4 sm:gap-8 items-start mb-4 sm:mb-12">
        <div className="w-36 sm:w-36 h-36 sm:h-36 relative">
          <Image
            src="https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDS5yTb3F2GCckijaRb9PEu47lSefps1HmAW0YL"
            alt="Swanand"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 36vw"
            className="rounded-full object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="text-left border-b border-black dark:border-gray-700">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <Typewriter
              words={[
                "Software Engineer, Technology Enthusiast, and Aspiring Musician",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg font-light">
            I&apos;m Swanand Sanjay Khonde, accomplished software engineer with
            a proven track record of developing and implementing both frontend
            and backend solutions. Known for working with limited direction while
            understanding and executing a business vision to build market-ready
            applications. Capable of leading projects from conception to
            completion and poised for future leadership roles.
          </p>
          <SocialCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
          <Skills />
          <WorkExperience />
        </div>
        <div className="mt-4 mb-4">
          <div className="border-t border-black dark:border-gray-700 mx-auto py-2 sm:py-3 flex justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-center">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {displayedProjects.map((project) => (
              <ProjectCards
                {...project}
                key={project.title}
                onClick={() => handleProjectClick(project.title)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => router.push("/projects")}
              className="mt-4 text-white dark:text-white bg-[rgb(64,85,131)] dark:bg-slate-500 hover:bg-[rgb(41,55,91)] dark:hover:bg-slate-800 font-bold py-2 px-4 rounded self-center"
            >
              View More
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row h-full mt-4">
          <div className="w-full sm:w-1/2 flex flex-col">
            <div className="border-t border-black dark:border-gray-700 mx-auto py-2 sm:py-3 flex justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-center">
                Articles
              </h2>
            </div>
            <div className="overflow-auto" style={{ maxHeight: "80vh" }}>
              {displayedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
              <button
                onClick={toggleArticles}
                className="mt-4 text-gray-200 dark:text-white bg-[rgb(64,85,131)] dark:bg-slate-500 hover:bg-[rgb(41,55,91)] dark:hover:bg-slate-800 font-bold py-2 px-4 rounded self-center"
              >
                {showAllArticles ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col mt-6 sm:mt-2">
            <div className="border-t border-black dark:border-gray-700 mx-auto py-2 sm:py-3 flex justify-center ">
              <h2 className="text-xl sm:text-2xl font-bold text-center">
                Gallery
              </h2>
            </div>
            <div className="flex-grow flex items-center justify-center p-4">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
