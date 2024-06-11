import React from "react";
import { IconType } from "react-icons";

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

export default ProjectCards;
