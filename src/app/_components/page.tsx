import { skills, SkillSet } from "../../../data/skills";
import { socialLinks, SocialLink } from "../../../data/socials";
import {
  WorkExperienceType,
  workExperiences,
} from "../../../data/workexperience";

import { IoSettingsOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import React from "react";
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
            className="size-7 text-slate-400 rounded-lg hover:bg-slate-600 hover:text-slate-600"
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

export { SocialCard, Skills, WorkExperience };
