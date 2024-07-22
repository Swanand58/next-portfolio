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

export const dynamic = "force-dynamic";

const Home: React.FC = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);
  const router = useRouter();

  const toggleArticles = () => {
    setShowAllArticles(!showAllArticles);
  };

  const displayedArticles = showAllArticles ? articles : articles.slice(0, 2);
  const displayedProjects = projects.slice(0, 3);

  return (
    <main className=" min-h-screen p-4 sm:p-8">
      <section className="flex gap-4 sm:gap-8 items-start mb-4 sm:mb-12">
        <div className="w-36 sm:w-36 h-36 sm:h-36 relative">
          <Image
            src="/logo.jpg"
            alt="Swanand"
            fill
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
          <p className="mt-3 sm:mt-5 text-base sm:text-lg font-light">
            I'm Swanand Sanjay Khonde, a software developer based in Houston,
            Texas, currently pursuing a Master's degree in Computer Science from
            Rice University. My passion for technology and coding drives me to
            constantly learn and explore new things. Beyond my love for coding,
            music is a significant part of my life. Music fuels my creativity
            and helps me unwind. Whenever I feel tired or stressed, a cup of
            masala tea is my go-to stress buster. Houston has become my new home
            as I embark on this exciting journey of advanced studies in computer
            science. I'm eager to combine my technical skills with my diverse
            interests to create innovative solutions and contribute to the tech
            community.
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
              <ProjectCards key={project.title} {...project} />
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
