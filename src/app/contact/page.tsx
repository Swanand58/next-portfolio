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
    <main>
      <section>
        <div className="mb-6 mt-6 ml-6 mr-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold ">Let's get in touch!</h1>
          </div>
          <div className="text-center gap-x-7 gap-y-7 mt-12 mb-6 ml-36 mr-36  ">
            <p className="text-lg font-semibold align-middle">
              Thank you for wanting to reach out! I'd love to hear your
              thoughts, questions, or ideas. You can email me directly at
              swanandkhonde1999@gmail.com. I try to reply to all messages within
              a day, but sometimes it might take a bit longer if I'm busy. If
              you prefer social media, you can find me on LinkedIn and Twitter.
              If not on LinkedIn I am definitely active on Instagram. I share
              updates there and love chatting with followers. Thanks again for
              reaching out, and I'm excited to hear from you!{" "}
            </p>
          </div>
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
