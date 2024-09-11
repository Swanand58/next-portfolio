import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const ContactCardAbout: React.FC = () => {
  return (
    <div className="flex flex-col items-center sm:items-start justify-center mt-20 space-y-4 p-x-4 mb-12">
      <a
        href="https://github.com/Swanand58"
        className="flex items-center space-x-3"
        target="_blank"
      >
        <FaGithub className="text-2xl text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-500 hover:underline">
          Follow me on GitHub
        </span>
      </a>
      <a
        href="https://twitter.com/swanandkhonde_"
        className="flex items-center space-x-3"
        target="_blank"
      >
        <FaXTwitter className="text-2xl text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-500 hover:underline">
          Follow me on Twitter
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/swanandkhonde/"
        className="flex items-center space-x-3"
        target="_blank"
      >
        <FaLinkedin className="text-2xl text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-500 hover:underline">
          Follow me on LinkedIn
        </span>
      </a>
      <a
        href="https://leetcode.com/u/Swanand58/"
        className="flex items-center space-x-3"
        target="_blank"
      >
        <SiLeetcode className="text-2xl text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-500 hover:underline">
          Follow me on Leetcode
        </span>
      </a>
      <a
        href="mailto:swanandkhonde1999@gmail.com"
        className="flex items-center space-x-3"
        target="_blank"
      >
        <FaEnvelope className="text-2xl text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-500 hover:underline">
          Email me
        </span>
      </a>
    </div>
  );
};

export default ContactCardAbout;
