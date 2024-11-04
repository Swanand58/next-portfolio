import { Experience } from "../../../data/experience";
import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-[rgb(51,67,101)] dark:bg-slate-500 hover:bg-[rgb(41,55,91)] dark:hover:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md m-3">
      <div className="flex mb-4">
        <Image
          width={40}
          height={40}
          loading="lazy"
          src={experience.companyLogo}
          alt={`${experience.company} Logo`}
          className="w-10 h-10 ml-3 mt-1 rounded-2xl"
        />
        <div className="flex flex-col ml-3">
          <h2 className="text-xl sm:text-2xl font-bold ml-3 text-white">
            {experience.company}
          </h2>
          <p className="text-xs sm:text-sm ml-3 text-slate-200 italic">
            {experience.location}
          </p>
        </div>
      </div>

      <p className="text-sm sm:text-base font-semibold ml-3 text-slate-200">
        {experience.role} - {experience.period}
      </p>
      <ul className="my-2 mt-0.5 flex flex-wrap gap-2 ml-3 text-slate-200 text-sm sm:text-base mb-6">
        <span className="font-semibold">Skills:</span>
        {experience.skills.map((skill, index) => (
          <li
            key={index}
            className="text-slate-200 text-sm sm:text-base italic"
          >
            {skill}
            {index < experience.skills.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
      <ul className="text-white list-none pl-5">
        {experience.achievements.map((achievement, index) => {
          const isSubheading = achievement.startsWith("<b>");
          return (
            <li
              key={index}
              className={`relative ${isSubheading ? " text-lg mt-4" : "ml-5"}`}
            >
              {isSubheading && (
                <span className="absolute -left-5 top-1 text-gray-200"></span>
              )}
              {!isSubheading && (
                <span className="absolute -left-5 top-1 text-white">•</span>
              )}
              <span dangerouslySetInnerHTML={{ __html: achievement }}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
