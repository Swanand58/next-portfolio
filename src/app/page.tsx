"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SocialCard, Skills, WorkExperience } from "./_components/page";
import ProjectCards from "./_components/projectcards";
import ArticleCard from "./_components/articlecard";
import ImageCarousel from "./_components/imagecarousel";
import { projects, articles, carouselImages } from "../../data/projects";
import { useRouter } from "next/navigation";

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
    <main className="bg-black text-white min-h-screen p-4 sm:p-8">
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
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Software Engineer, Technology Enthusiast, and Aspiring Musician
          </h1>
          <p className="mt-2 sm:mt-4">
            I'm Swanand Sanjay Khonde, a software developer based in Houston,
            Texas, currently pursuing a Master's degree in Computer Science from
            Rice University. My passion for technology and coding drives me to
            constantly learn and explore new things. Beyond my love for coding,
            music is a significant part of my life. I listen to songs all the
            time and enjoy playing guitar. Music fuels my creativity and helps
            me unwind. In my free time, I love to go on long bike rides,
            exploring new places and enjoying the journey. Photography is
            another hobby of mine; capturing moments and landscapes allows me to
            see the world from different perspectives. Whenever I feel tired or
            stressed, a cup of masala tea is my go-to stress buster. There's
            nothing quite like the comfort of a warm, aromatic tea to rejuvenate
            my spirits. Houston has become my new home as I embark on this
            exciting journey of advanced studies in computer science. I'm eager
            to combine my technical skills with my diverse interests to create
            innovative solutions and contribute to the tech community.
          </p>
          <SocialCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Skills />
          <WorkExperience />
        </div>
        <div className="mt-4">
          <div className="border-t border-gray-700 mx-auto py-2 sm:py-3 flex justify-center">
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
              className="mt-4 text-white bg-slate-500 hover:bg-slate-800 font-bold py-2 px-4 rounded self-center"
            >
              View More
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row h-full mt-4">
          <div className="w-full sm:w-1/2 flex flex-col">
            <div className="border-t border-gray-700 mx-auto py-2 sm:py-3 flex justify-center">
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
                className="mt-4 text-white bg-slate-500 hover:bg-slate-800 font-bold py-2 px-4 rounded self-center"
              >
                {showAllArticles ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <div className="border-t border-gray-700 mx-auto py-2 sm:py-3 flex justify-center">
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
