import { IconType } from "react-icons";
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";

interface SkillSet {
  id: string;
  icon: IconType;
  description: string;
}

const skills: SkillSet[] = [
  {
    id: "programming",
    icon: FaCode,
    description: "Python, Java, Javascript/ Typescript, C++, C",
  },
  {
    id: "backend",
    icon: FaServer,
    description: "Spring Boot, Node.js, Express.js, Flask",
  },
  {
    id: "frontend",
    icon: FaLaptopCode,
    description: "React, Next.js",
  },
  {
    id: "devops",
    icon: VscAzureDevops,
    description:
      "Azure, AWS, Jenkins, Git, JUnit, Ansible, Service Now, Grafana",
  },
  {
    id: "databases",
    icon: FaDatabase,
    description: "SQL, MongoDB, PostgreSQL",
  },
];

export type { SkillSet };
export { skills };
