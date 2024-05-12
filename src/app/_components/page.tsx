import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaServicestack,
} from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";

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
      <div className="flex flex-col gap-y-4 ">
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
    <div className="bg-slate-500 hover:bg-slate-900 text-white p-4 rounded-lg shadow-md">
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
              <p className="text-xs">Software Engineer 1 (Internship)</p>
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

export { SocialCard, Skills, WorkExperience };
