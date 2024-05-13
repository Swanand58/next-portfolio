import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IconType } from "react-icons";
import React, { useState } from "react";
import Image from "next/image";

function SocialCard() {
  return (
    <div className="flex py-5">
      <div className="flex gap-x-6 gap-y-2">
        <a
          href="https://www.linkedin.com/in/swanandkhonde/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-7 text-slate-400 rounded-lg  hover:bg-slate-100 hover:text-slate-600" />
        </a>
        <a
          href="https://github.com/Swanand58"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-7 text-slate-400 rounded-lg  hover:bg-slate-100 hover:text-slate-600" />
        </a>
        <a
          href="https://twitter.com/swanandkhonde_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="size-7 text-slate-400 rounded-lg  hover:bg-slate-100 hover:text-slate-600" />
        </a>
        <a
          href="mailto:swanandkhonde1999@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="size-7 text-slate-400 rounded-lg  hover:bg-slate-100 hover:text-slate-600" />
        </a>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className=" bg-slate-500 hover:bg-slate-800 text-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-3 border-b-2 border-gray-400">
        <h3 className="text-2xl font-semibold flex items-center">
          <IoSettingsOutline className="mr-2 text-xl" /> Skills
        </h3>
      </div>
      <div className="flex flex-col gap-y-8 ">
        <p className="flex items-center">
          <FaCode className="mr-2" />
          <strong>Python, Java, Javascript/Typescript, C++, C</strong>
        </p>
        <p className="flex items-center">
          <FaServer className="mr-2" />
          <strong>Spring Boot, Node.js, Kafka, Redis</strong>
        </p>
        <p className="flex items-center">
          <FaLaptopCode className="mr-2" />
          <strong>React, Next.js, Groovy</strong>
        </p>
        <p className="flex items-center">
          <VscAzureDevops className="mr-2" />
          <strong>
            AWS, Jenkins, Git, JUnit, Ansible, Service Now, Grafana
          </strong>
        </p>
        <p className="flex items-center">
          <FaDatabase className="mr-2" />
          <strong>SQL, MongoDB</strong>
        </p>
      </div>
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="bg-slate-500 hover:bg-slate-800 text-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-3 border-b-2 border-gray-400">
        <h3 className="text-2xl font-semibold flex items-center">
          <MdWork className="mr-2 text-xl" /> Work Experience
        </h3>
      </div>
      <ul>
        <li className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img
              src="/nedd.jpeg"
              alt="Company Logo"
              className="w-10 h-10 mr-4 rounded-full"
            />
            <div>
              <strong>Nedd Technologies</strong>
              <p className="text-xs">Software Engineer I (Internship)</p>
            </div>
          </div>
          <span className="text-sm">May 2024 - Aug 2024</span>
        </li>
        <li className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img
              src="/hsbc.jpeg"
              alt="Company Logo"
              className="w-10 h-10 mr-4 rounded-full"
            />
            <div>
              <strong>HSBC</strong>
              <p className="text-xs">Software Engineer</p>
            </div>
          </div>
          <span className="text-sm">Aug 2021 - Jun 2023</span>
        </li>
        <li className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img
              src="/xceed.jpeg"
              alt="Company Logo"
              className="w-10 h-10 mr-4 rounded-full"
            />
            <div>
              <strong>Xceed Imagination</strong>
              <p className="text-xs">Software Engineer Intern</p>
            </div>
          </div>
          <span className="text-sm">Jan 2021 - July 2020</span>
        </li>
        <li className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img
              src="/oda.jpeg"
              alt="Company Logo"
              className="w-10 h-10 mr-4 rounded-full"
            />
            <div>
              <strong>Optimum Data Analytics</strong>
              <p className="text-xs">Machine Learning Engineer Intern</p>
            </div>
          </div>
          <span className="text-sm">Aug 2019 - Jan 2020</span>
        </li>
        <li className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img
              src="/iauro.jpeg"
              alt="Company Logo"
              className="w-10 h-10 mr-4 rounded-full"
            />
            <div>
              <strong>Iauro Systems</strong>
              <p className="text-xs">Software Engineer Intern</p>
            </div>
          </div>
          <span className="text-sm">June 2018 - Aug 2018</span>
        </li>
      </ul>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  Icon: IconType;
  link: string;
}

function ProjectCards({ title, description, Icon, link }: ProjectCardProps) {
  return (
    <div className="bg-slate-500 text-white p-4 rounded-lg shadow-md m-2 transition duration-300 ease-in-out hover:shadow-xl hover:bg-slate-800 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <Icon className="text-xl w-10 h-10" />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="mb-4 flex-1">{description}</p>
      </div>
      <a
        href={link}
        className="hover:text-blue-300 p-2 rounded font-semibold transition-colors text-left mt-2"
      >
        View Project
      </a>
    </div>
  );
}

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
export {
  SocialCard,
  Skills,
  WorkExperience,
  ProjectCards,
  ArticleCard,
  ImageCarousel,
};
