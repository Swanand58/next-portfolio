import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

export default function SocialCard() {
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
