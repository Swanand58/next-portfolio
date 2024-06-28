import { IconType } from "react-icons";
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa6";
import { TbKeyframes } from "react-icons/tb";

interface SkillSet {
  id: string;
  icon: IconType;
  description: string;
}

const skills: SkillSet[] = [
  {
    id: "programming",
    icon: FaCode,
    description: "Python, Java, Javascript/ Typescript",
  },
  {
    id: "backend",
    icon: FaServer,
    description: "Spring Boot, Node.js, Flask",
  },
  {
    id: "frontend",
    icon: FaLaptopCode,
    description: "React.js, Next.js, Tailwind CSS",
  },
  {
    id: "devops",
    icon: TbKeyframes,
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
