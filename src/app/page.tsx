"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  SocialCard,
  Skills,
  WorkExperience,
  ProjectCards,
  ArticleCard,
  ImageCarousel,
} from "./_components/page";
import { projects, articles, carouselImages } from "../../data/projects";

export const dynamic = "force-dynamic";

const Home: React.FC = () => {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const toggleArticles = () => {
    setShowAllArticles(!showAllArticles);
  };

  const displayedArticles = showAllArticles ? articles : articles.slice(0, 2);
  return (
    <main className="bg-black text-white min-h-screen p-8">
      <section className="flex gap-8 items-left mb-12">
        <div className="w-28 h-28 relative">
          <Image
            src="/logo.jpg"
            alt="Swanand"
            layout="fill"
            className="rounded-full object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="mt-4 text-left">
          <h1 className="text-4xl font-bold">
            Software Engineer, Tech Enthusiast, and Amateur Musician.
          </h1>
          <p className="mt-4">
            I'm Swanand, a software developer based in Houston, Texas. I'm
            pursuing a Master's degree in Computer Science from Rice University.
          </p>
          <SocialCard />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Skills />
          <WorkExperience />
        </div>
        <div className="mt-4">
          <div className="border-t border-gray-700 mx-auto py-3 flex justify-center">
            <h2 className="text-2xl font-bold text-center">Projects</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {projects.map((project) => (
              <ProjectCards key={project.title} {...project} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex h-full">
          {" "}
          <div className="w-1/2 flex flex-col">
            {" "}
            <div className="border-t border-gray-700 mx-auto py-3 flex justify-center">
              <h2 className="text-2xl font-bold text-center">Articles</h2>
            </div>
            <div className="overflow-auto" style={{ maxHeight: "80vh" }}>
              {" "}
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
          <div className="w-1/2 flex flex-col">
            {" "}
            <div className="border-t border-gray-700 mx-auto py-3 flex justify-center">
              <h2 className="text-2xl font-bold text-center">Gallery</h2>
            </div>
            <div className="flex-grow flex items-center justify-center p-4">
              {" "}
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
