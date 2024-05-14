import { TbBrandTypescript } from "react-icons/tb";
import { PiFileCppDuotone } from "react-icons/pi";
import { IconType } from "react-icons";
import { SiJavascript } from "react-icons/si";
import { FaJava, FaP } from "react-icons/fa6";
import { FaNode, FaReact, FaPython } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
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

interface Project {
  title: string;
  description: string;
  Icon: IconType;
  link: string;
}

const projects: Project[] = [
  {
    title: "Next.js Portfolio",
    description:
      "This Website. My portfolio website built with Next.js and Tailwind CSS.",
    Icon: TbBrandTypescript,
    link: "https://github.com/Swanand58/next-portfolio",
  },
  {
    title: "Othello Reversi Game using Cilk Plus",
    description:
      "A parallelized version of the classic strategy game Othello (also known as Reversi), implemented in Cilk Plus. ",
    Icon: PiFileCppDuotone,
    link: "https://github.com/Swanand58/Othello_CILKPLUS",
  },
  {
    title: "LU Decomposition using OpenMP",
    description:
      "A parallel implementations of LU decomposition that use Gaussian elimination to factor a dense N x N matrix into an upper-triangular one and a lower-triangular one.",
    Icon: PiFileCppDuotone,
    link: "https://github.com/Swanand58/LU_Decomposition_OPENMP",
  },
  {
    title: "OES Rice Event Management App",
    description:
      "A work in progress project for a fully scalable event management web application for the Ralph O'connor Building of Engineering Sciences at Rice University.",
    Icon: SiJavascript,
    link: "https://github.com/Swanand58/OES-Rice-EventManagement",
  },
  {
    title: "Ball World Design Patterns",
    description:
      "A web application that draws random-sized balls at random locations on a canvas which has different moving behavior. The application follows the MVC programming paradigm and utilizes various design patterns to structure the code",
    Icon: FaJava,
    link: "https://github.com/Swanand58/ball-world-design-pattern-exercise",
  },
  {
    title: "Social Media App Backend",
    description:
      "A fully scalable social media platform in MERN stack. Backend written in Node.js (Express.js) and MongoDB.",
    Icon: FaNode,
    link: "https://github.com/Swanand58/social-media-app-backend-rice",
  },
  {
    title: "Social Media App Frontend",
    description:
      "A fully scalable social media platform in MERN stack. Frontend written in React.js",
    Icon: FaReact,
    link: "https://github.com/Swanand58/social-media-app-frontend-rice",
  },
  {
    title: "2-Cars Javascript Game",
    description: "Interactive 2-cars game built with JavaScript.",
    Icon: SiJavascript,
    link: "https://github.com/Swanand58/2-cars-javascript",
  },
  {
    title: "Document Classification",
    description:
      "'Document Classification using visual parameters', a deep learning project aimed at streamlining document categorization (letters, emails, resumes, invoices, etc.) for user convenience",
    Icon: FaPython,
    link: "https://github.com/Swanand58/Document_Classification",
  },
  {
    title: "Structure from Motion",
    description:
      "Structure from Motion (SfM) algorithm optimized for architectural exteriors, generating 3D models.",
    Icon: FaPython,
    link: "https://github.com/Swanand58/structure-from-motion",
  },
];

interface Article {
  id: number;
  date: string;
  title: string;
  summary: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    date: "17 Oct 2023",
    title: "Valhalla: The Graduate Student Bar at Rice University",
    summary:
      "A small bar in the middle of the campus which serves cheap but good beer. Almost every Friday night is pretty eventful. Almost.",
    link: "https://example.com/valhalla-article",
  },
  {
    id: 2,
    date: "28 Jul 2023",
    title: "The Philosophy of Judgement",
    summary:
      "Here, I try to discover the profound philosophy of not judging people quickly and giving them the time they deserve to be understood in this insightful article.",
    link: "https://example.com/philosophy-article",
  },
  {
    id: 3,
    date: "12 May 2023",
    title: "The Art of Being a Good Student",
    summary:
      "Here, I try to discover the profound philosophy of not judging people quickly and giving them the time they deserve to be understood in this insightful article.",
    link: "https://example.com/art-of-being-good-student",
  },
  {
    id: 4,
    date: "12 May 2023",
    title: "The Art of Being a Good Student",
    summary:
      "Here, I try to discover the profound philosophy of not judging people quickly and giving them the time they deserve to be understood in this insightful article.",
    link: "https://example.com/art-of-being-good-student",
  },
];

const carouselImages = [
  "/laptop.avif",
  "/hsbc.jpeg",
  "/xceed.jpeg",
  "/self.jpg",
  "/iauro.jpeg",
  "/oda.jpeg",
];

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/swanandkhonde/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Swanand58",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/swanandkhonde_",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    url: "mailto:swanandkhonde1999@gmail.com",
    icon: FaEnvelope,
  },
];

interface WorkExperienceType {
  id: string;
  companyLogo: string;
  companyName: string;
  role: string;
  duration: string;
}

const workExperiences: WorkExperienceType[] = [
  {
    id: "nedd",
    companyLogo: "/nedd.jpeg",
    companyName: "Nedd Technologies",
    role: "Software Engineer I (Internship)",
    duration: "May 2024 - Aug 2024",
  },
  {
    id: "hsbc",
    companyLogo: "/hsbc.jpeg",
    companyName: "HSBC",
    role: "Software Engineer",
    duration: "Aug 2021 - Jun 2023",
  },
  {
    id: "xceed",
    companyLogo: "/xceed.jpeg",
    companyName: "Xceed Imagination",
    role: "Software Engineer Intern",
    duration: "Jan 2021 - July 2021",
  },
  {
    id: "oda",
    companyLogo: "/oda.jpeg",
    companyName: "Optimum Data Analytics",
    role: "Machine Learning Engineer Intern",
    duration: "Aug 2019 - Jan 2020",
  },
  {
    id: "iauro",
    companyLogo: "/iauro.jpeg",
    companyName: "Iauro Systems",
    role: "Software Engineer Intern",
    duration: "June 2018 - Aug 2018",
  },
];

interface SkillSet {
  id: string;
  icon: IconType;
  description: string;
}

const skills: SkillSet[] = [
  {
    id: "programming",
    icon: FaCode,
    description: "Python, Java, Javascript/Typescript, C++, C",
  },
  {
    id: "backend",
    icon: FaServer,
    description: "Spring Boot, Node.js, Kafka, Redis",
  },
  {
    id: "frontend",
    icon: FaLaptopCode,
    description: "React, Next.js, Groovy",
  },
  {
    id: "devops",
    icon: VscAzureDevops,
    description: "AWS, Jenkins, Git, JUnit, Ansible, Service Now, Grafana",
  },
  {
    id: "databases",
    icon: FaDatabase,
    description: "SQL, MongoDB",
  },
];

export {
  projects,
  articles,
  carouselImages,
  socialLinks,
  workExperiences,
  skills,
};
export type { SocialLink, WorkExperienceType, SkillSet };
