import React from "react";
import { IconType } from "react-icons";
import { GrView } from "react-icons/gr";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  Icon: IconType;
  link: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  Icon,
  link,
}) => {
  return (
    <div
      className="relative bg-slate-500 text-white rounded-lg shadow-md m-1 sm:m-2 transition duration-300 ease-in-out hover:shadow-xl hover:bg-slate-800 flex flex-col justify-between h-full cursor-pointer overflow-hidden"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="relative w-full h-32 sm:h-48 p-2">
        <div className="relative w-full h-32 sm:h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="p-2 sm:p-4 flex-1 flex flex-col justify-between card-content transition filter duration-300 ease-in-out">
        <div>
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 mt-2 sm:mt-1">
            <Icon className="text-xl w-8 sm:w-10 h-8 sm:h-10" />
            <h3 className="text-base sm:text-lg font-bold">{title}</h3>
          </div>
          <p className="mt-4 sm:mb-4 flex-1 text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
        <GrView className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default ProjectCards;
