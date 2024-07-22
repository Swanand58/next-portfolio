import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const ContactCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center mt-20 mr-20 ml-20 mb-10 space-y-5 p-x-10">
      <a
        href="https://github.com/Swanand58"
        className="flex items-center space-x-6"
        aria-label="Follow me on GitHub"
      >
        <FaGithub className="size-10 text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-600 hover:underline">
          Follow me on GitHub
        </span>
      </a>
      <a
        href="https://twitter.com/swanandkhonde_"
        className="flex items-center space-x-6"
        aria-label="Follow me on X"
      >
        <FaXTwitter className="size-10 text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-600 hover:underline">
          Follow me on X
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/swanandkhonde/"
        className="flex items-center space-x-6"
        aria-label="Follow me on LinkedIn"
      >
        <FaLinkedin className="size-10 text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-600 hover:underline">
          Follow me on LinkedIn
        </span>
      </a>
      <a
        href="mailto:swanandkhonde1999@gmail.com"
        className="flex items-center space-x-6"
        aria-label="Email me"
      >
        <FaEnvelope className="size-10 text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-600 hover:underline">
          Email me
        </span>
      </a>
      <a
        href="https://www.instagram.com/swanandkhonde_/"
        className="flex items-center space-x-6"
        aria-label="Follow me on Instagram"
      >
        <FaInstagram className="size-10 text-[rgb(51,67,101)] dark:text-slate-400 rounded-lg hover:text-[rgb(41,55,91)] dark:hover:text-slate-600" />
        <span className="text-sm font-semibold text-[rgb(51,67,101)] dark:text-slate-400 hover:text-[rgb(41,55,91)] dark:hover:text-slate-600 hover:underline">
          Follow me on Instagram
        </span>
      </a>
    </div>
  );
};

export default ContactCard;
