import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="p-4 sm:p-6">
      <section>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold ">
            Let's get in touch!
          </h1>
        </div>
        <div className="text-center mt-12 mb-6 px-6 sm:px-36 ">
          <p className="text-sm sm:text-base font-semibold">
            Thank you for reaching out! I'd love to hear your thoughts,
            questions, or ideas. You can email me directly at
            swanandkhonde1999@gmail.com. I try to reply within a day, but it
            might take a bit longer if I'm busy. You can also connect with me on
            LinkedIn and Twitter. If not on LinkedIn, I'm definitely active on
            Instagram, where I share updates and enjoy chatting with followers.
            Thanks again for reaching out, and I look forward to hearing from
            you!{" "}
          </p>
        </div>

        <div className="flex flex-col justify-center mt-20 mr-20 ml-20 mb-10 space-y-5 p-x-10">
          <a
            href="https://github.com/Swanand58"
            className="flex items-center space-x-6"
            aria-label="Follow me on GitHub"
          >
            <FaGithub className="size-10 text-slate-400 rounded-lg hover:text-slate-600" />
            <span className="text-sm font-semibold hover:text-slate-500">
              Follow me on GitHub
            </span>
          </a>
          <a
            href="https://twitter.com/swanandkhonde_"
            className="flex items-center space-x-6"
            aria-label="Follow me on X"
          >
            <FaXTwitter className="size-10 text-slate-400 rounded-lg hover:text-slate-600" />
            <span className="text-sm font-semibold hover:text-slate-500">
              Follow me on X
            </span>{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/swanandkhonde/"
            className="flex items-center space-x-6 "
            aria-label="Follow me on LinkedIn"
          >
            <FaLinkedin className="size-10 text-slate-400 rounded-lg hover:text-slate-600" />
            <span className="text-sm font-semibold hover:text-slate-500">
              Follow me on LinkedIn
            </span>
          </a>
          <a
            href="mailto:swanandkhonde1999@gmail.com"
            className="flex items-center space-x-6 "
            aria-label="Email me"
          >
            <FaEnvelope className="size-10 text-slate-400 rounded-lg hover:text-slate-600 " />
            <span className="text-sm font-semibold hover:text-slate-500 ">
              Email me
            </span>
          </a>
          <a
            href="https://www.instagram.com/swanandkhonde_/"
            className="flex items-center space-x-6 "
            aria-label="Email me"
          >
            <FaInstagram className="size-10 text-slate-400 rounded-lg hover:text-slate-600 " />
            <span className="text-sm font-semibold hover:text-slate-500 ">
              Follow me on Instagram
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
