import { IconType } from "react-icons";
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa6";
import { TbKeyframes } from "react-icons/tb";
import { BsClipboard2Data } from "react-icons/bs";

interface SkillSet {
  id: string;
  icon: IconType;
  description: string;
}

const skills: SkillSet[] = [
  {
    id: "programming",
    icon: FaCode,
    description: "Python, Java, Javascript/ Typescript, C++",
  },
  {
    id: "backend",
    icon: FaServer,
    description: "Spring Boot, Node.js, Flask, Express",
  },
  {
    id: "frontend",
    icon: FaLaptopCode,
    description: "React.js, Next.js, Tailwind CSS",
  },
  {
    id: "devops",
    icon: TbKeyframes,
    description: "Azure, AWS, Jenkins, Git, JUnit, Ansible, Grafana, Kafka",
  },
  {
    id: "databases",
    icon: FaDatabase,
    description: "SQL, MongoDB, PostgreSQL, Redis",
  },
  {
    id: "Machine Learning",
    icon: BsClipboard2Data,
    description:
      "Pytorch, Tensorflow, Pandas, Numpy, Neural Networks,, Matplotlib",
  },
];

export type { SkillSet };
export { skills };
