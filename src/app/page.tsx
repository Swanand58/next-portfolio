"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";

import { HeroSection } from "@/components/features/hero-section";
import { SkillsList } from "@/components/features/skills-list";
import { WorkExperienceList } from "@/components/features/work-experience-list";
import { ProjectCard } from "@/components/features/project-card";
import { ArticleCard } from "@/components/features/article-card";
import { ImageCarousel } from "@/components/features/image-carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { projects } from "@/data/projects";
import { carouselImages } from "@/data/images";
import { articles } from "@/data/articles";

export const dynamic = "force-dynamic";

export default function Home() {
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
    <main className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <HeroSection />

      {/* Separator */}
      <div className="px-4 sm:px-8">
        <Separator className="my-0" />
      </div>

      {/* Rest of the content */}
      <div className="p-4 pt-12 sm:p-8 sm:pt-16">
        {/* Skills & Experience Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <SkillsList />
          <WorkExperienceList />
        </div>

        {/* Projects Section */}
        <div className="mb-4 mt-16">
          <div className="mx-auto flex justify-center border-t border-border py-2 sm:py-3">
            <h2 className="text-center text-xl font-bold sm:text-2xl">
              Projects
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {displayedProjects.map((project) => (
              <ProjectCard
                {...project}
                key={project.title}
                onClick={() => handleProjectClick(project.title)}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => router.push("/projects")}>View More</Button>
          </div>
        </div>

        {/* Articles & Gallery */}
        <div className="mt-12 flex h-full flex-col sm:flex-row">
          {/* Articles */}
          <div className="flex w-full flex-col sm:w-1/2">
            <div className="mx-auto flex justify-center border-t border-border py-2 sm:py-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">
                Articles
              </h2>
            </div>
            <div className="overflow-auto" style={{ maxHeight: "80vh" }}>
              {displayedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
              <div className="mt-4 flex justify-center">
                <Button variant="secondary" onClick={toggleArticles}>
                  {showAllArticles ? "Show Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-6 flex w-full flex-col sm:mt-2 sm:w-1/2">
            <div className="mx-auto flex justify-center border-t border-border py-2 sm:py-3">
              <h2 className="text-center text-xl font-bold sm:text-2xl">
                Gallery
              </h2>
            </div>
            <div className="flex flex-grow items-center justify-center p-4">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
