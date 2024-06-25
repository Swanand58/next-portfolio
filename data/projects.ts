import { TbBrandTypescript } from "react-icons/tb";
import { PiFileCppDuotone } from "react-icons/pi";
import { IconType } from "react-icons";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaNode, FaReact, FaPython } from "react-icons/fa";

import { FaGolang } from "react-icons/fa6";

interface Project {
  image: string;
  title: string;
  description: string;
  Icon: IconType;
  link: string;
}

const projects: Project[] = [
  {
    image: "/projects/othello.png",
    title: "Othello Reversi Game using Cilk Plus",
    description:
      "A parallelized version of the classic strategy game Othello (also known as Reversi), implemented in Cilk Plus. Implements the negamax algorithm for AI decision-making.",
    Icon: PiFileCppDuotone,
    link: "https://github.com/Swanand58/Othello_CILKPLUS",
  },
  {
    image: "/projects/portfolio.jpeg",
    title: "Next.js Portfolio",
    description:
      "This Website. My portfolio website built with Next.js and Tailwind CSS.",
    Icon: TbBrandTypescript,
    link: "https://github.com/Swanand58/next-portfolio",
  },
  {
    image: "/projects/social-media-fe.jpg",
    title: "Social Media App Frontend",
    description:
      "A fully scalable social media platform in MERN stack. Frontend written in React.js",
    Icon: FaReact,
    link: "https://github.com/Swanand58/social-media-app-frontend-rice",
  },
  {
    image: "/projects/lu.jpg",
    title: "LU Decomposition using OpenMP",
    description:
      "A parallel implementations of LU decomposition that use Gaussian elimination to factor a dense N x N matrix into an upper-triangular one and a lower-triangular one.",
    Icon: PiFileCppDuotone,
    link: "https://github.com/Swanand58/LU_Decomposition_OPENMP",
  },
  {
    image: "/projects/spotify-be.png",
    title: "Spotify Music Party Backend",
    description:
      "A work in progess project where a group of music enthusiasts are building a music party app using spotify developer APIs",
    Icon: FaGolang,
    link: "https://github.com/Swanand58/spotify-music-party-backend",
  },
  {
    image: "/projects/spotify-fe.jpg",
    title: "Spotify Music Party Frontend",
    description:
      "A work in progess project where a group of music enthusiasts are building a music party app using spotify developer APIs",
    Icon: TbBrandTypescript,
    link: "https://github.com/Swanand58/spotify-music-party-frontend",
  },
  {
    image: "/projects/event.jpg",
    title: "OES Rice Event Management App",
    description:
      "A work in progress project for a fully scalable event management web application for the Ralph O'connor Building of Engineering Sciences at Rice University.",
    Icon: TbBrandTypescript,
    link: "https://github.com/Swanand58/OES-Rice-EventManagement",
  },
  {
    image: "/projects/dp.webp",
    title: "Ball World Design Patterns",
    description:
      "A web application that draws random-sized balls at random locations on a canvas which has different moving behavior. The application follows the MVC programming paradigm and utilizes various design patterns to structure the code",
    Icon: FaJava,
    link: "https://github.com/Swanand58/ball-world-design-pattern-exercise",
  },
  {
    image: "/projects/social-media-be.png",
    title: "Social Media App Backend",
    description:
      "A fully scalable social media platform in MERN stack. Backend written in Node.js (Express.js) and MongoDB.",
    Icon: FaNode,
    link: "https://github.com/Swanand58/social-media-app-backend-rice",
  },
  {
    image: "/projects/2-cars.jpg",
    title: "2-Cars Javascript Game",
    description: "Interactive 2-cars game built with JavaScript.",
    Icon: SiJavascript,
    link: "https://github.com/Swanand58/2-cars-javascript",
  },
  {
    image: "/projects/online-auction.png",
    title: "CodeFury 2021 Hackathon HSBC Online Auction",
    description:
      "Built a Full Stack online auction platform in HSBC Hackathon CodeFury 2021",
    Icon: FaJava,
    link: "https://github.com/Swanand58/code-fury-2021",
  },
  {
    image: "/projects/document-classification.png",
    title: "Document Classification",
    description:
      "'Document Classification using visual parameters', a deep learning project aimed at streamlining document categorization (letters, emails, resumes, invoices, etc.) for user convenience",
    Icon: FaPython,
    link: "https://github.com/Swanand58/Document_Classification",
  },
  {
    image: "/projects/snake.png",
    title: "Classic Snake Game",
    description:
      "A snake game built with Pygames Python library. The game includes features such as a growing snake, food spawning, special food spawning, score tracking, and many more.",
    Icon: FaPython,
    link: "https://github.com/Swanand58/classic-snake-game",
  },
  {
    image: "/projects/sfm.png",
    title: "Structure from Motion",
    description:
      "Structure from Motion (SfM) algorithm optimized for architectural exteriors, generating 3D models.",
    Icon: FaPython,
    link: "https://github.com/Swanand58/structure-from-motion",
  },
  {
    image: "/projects/cd.png",
    title: "Compiler Design",
    description:
      "Compiler Design Course Assignments, Course from Vishwakarma Institute of Technology - Pune",
    Icon: PiFileCppDuotone,
    link: "https://github.com/Swanand58/CompilerDesign",
  },
  {
    image: "/projects/sudoku.jpeg",
    title: "Sudoku Game",
    description:
      "A Sudoku game built with python. GUI for Human Playable game and used Backtracking Algorithm for ai playing the game.",
    Icon: FaPython,
    link: "https://github.com/Swanand58/sudoku_game",
  },
];

export { projects };
