import {
  socialLinks,
  SocialLink,
  workExperiences,
  WorkExperienceType,
  skills,
  SkillSet,
  Experience,
} from "../../../data/projects";

import { IoSettingsOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IconType } from "react-icons";
import React, { useState } from "react";
import Image from "next/image";

const SocialCard: React.FC = () => {
  return (
    <div className="flex py-5">
      <div className="flex gap-x-6 gap-y-2">
        {socialLinks.map((link: SocialLink) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="size-7 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-600"
          >
            <link.icon className="size-7" />
          </a>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="bg-slate-500 hover:bg-slate-800 text-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-3 border-b-2 border-gray-400">
        <h3 className="text-2xl font-semibold flex items-center ">
          <IoSettingsOutline className="mr-2 text-xl" /> Skills
        </h3>
      </div>
      <div className="flex flex-col gap-y-8 mt-6 mb-6">
        {skills.map((skill: SkillSet) => (
          <p key={skill.id} className="flex gap-4 items-center">
            <skill.icon className="mr-2 size-6" />
            <strong>{skill.description}</strong>
          </p>
        ))}
      </div>
    </div>
  );
};
const WorkExperience: React.FC = () => {
  return (
    <div className="bg-slate-500 hover:bg-slate-800 text-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-3 border-b-2 border-gray-400">
        <h3 className="text-2xl font-semibold flex items-center">
          <MdWork className="mr-2 text-xl" /> Work Experience
        </h3>
      </div>
      <ul>
        {workExperiences.map((experience: WorkExperienceType) => (
          <li
            key={experience.id}
            className="flex justify-between items-center py-2 "
          >
            <div className="flex items-center">
              <img
                src={experience.companyLogo}
                alt={`${experience.companyName} Logo`}
                className="w-10 h-10 mr-4 rounded-full"
              />
              <div>
                <strong>{experience.companyName}</strong>
                <p className="text-xs">{experience.role}</p>
              </div>
            </div>
            <span className="text-sm">{experience.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  Icon: IconType;
  link: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
  title,
  description,
  Icon,
  link,
}) => {
  return (
    <div className="bg-slate-500 text-white p-2 sm:p-4 rounded-lg shadow-md m-1 sm:m-2 transition duration-300 ease-in-out hover:shadow-xl hover:bg-slate-800 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
          <Icon className="text-xl w-8 sm:w-10 h-8 sm:h-10" />
          <h3 className="text-base sm:text-lg font-bold">{title}</h3>
        </div>
        <p className="mb-2 sm:mb-4 flex-1 text-sm sm:text-base">
          {description}
        </p>
      </div>
      <a
        href={link}
        className="hover:text-blue-300 p-1 sm:p-2 rounded font-semibold transition-colors text-left mt-1 sm:mt-2"
      >
        View Project
      </a>
    </div>
  );
};

interface Article {
  id: number;
  date: string;
  title: string;
  summary: string;
  link: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div
      className="bg-slate-500 text-white p-4 rounded-lg shadow-md m-2 transition duration-300 ease-in-out hover:shadow-xl hover:bg-slate-800 flex flex-col justify-between"
      style={{ minHeight: "350px" }}
    >
      <div>
        <p className="text-sm">{article.date}</p>
        <h3 className="font-bold text-lg">{article.title}</h3>
        <p className="overflow-auto my-2" style={{ flex: "1" }}>
          {article.summary}
        </p>
      </div>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2  hover:text-blue-300 p-2 rounded font-semibold transition-colors"
      >
        Read article &gt;
      </a>
    </div>
  );
};

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-80">
        <div className="absolute inset-0 flex flex-wrap items-center">
          <Image
            src={images[currentIndex]}
            alt="Carousel"
            layout="fill"
            objectFit="contain"
            className="w-full h-auto"
          />
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 z-10"
        >
          {"<"}
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 z-10"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-slate-500 p-4 sm:p-6 rounded-lg shadow-md m-3">
      <h2 className="text-xl sm:text-2xl font-bold ml-3">
        {experience.company}
      </h2>
      <p className="text-sm sm:text-base ml-3 text-slate-200">
        {experience.role} - {experience.period}
      </p>
      <ul className="my-2 mt-3 flex flex-wrap gap-2 ml-3 text-slate-200 text-sm sm:text-base mb-6">
        <span className="font-semibold">Skills:</span>
        {experience.skills.map((skill, index) => (
          <li key={index} className="text-slate-200 text-sm sm:text-base">
            {skill}
            {index < experience.skills.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
      <ul className="text-white list-disc pl-5">
        {experience.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export {
  SocialCard,
  Skills,
  WorkExperience,
  ProjectCards,
  ArticleCard,
  ImageCarousel,
  ExperienceCard,
};
