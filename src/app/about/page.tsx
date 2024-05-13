"use client";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { metadata } from "../layout";

const About: React.FC = () => {
  return (
    <main className="bg-black text-white min-h-screen p-9 flex justify-between">
      <title>About | Swanand Khonde</title>
      <div className="w-1/2 space-y-8 p-4 p-y-8">
        <h1 className="text-3xl font-bold mb-3">Read more about me!</h1>
        <p className="styled-paragraph">
          I am a Computer Science Master's Student at Rice University. I
          completed my bachelor's in Computer Engineering from Vishwakarma
          Institute of Technology, Pune. Since then I have worked as a Software
          Engineer in HSBC Technology India.
        </p>
        <p className="styled-paragraph">
          I have good knowledge and hands-on experience in Python, Java,
          Javascript, and different frameworks like Flask, React, Spring Boot.
          Worked as a Full Stack Engineer in Shared Infrastructure Services team
          in Trade and Transaction Reporting department.
        </p>
        <p className="styled-paragraph">
          I managed Droit software for our department. I developed utilities in
          Python and Spring boot which supported the business users. I wrote
          ansible playbooks and jenkins pipelines to strengthen and support the
          Devops practices in my team. Developed a POC of an AI chatbot in
          Python using tensorflow for which I received 'Pat on the Back' Hsbc
          Award in Q2 2022.
        </p>
        <p className="styled-paragraph">
          Moreover, I developed 'load trade archiving service', a microservice
          which helped the business users to fetch relevant data from Load Trade
          application. For this I was awarded with 'Star Performer' Hsbc Award
          in Q1 2023. I'm passionate about using technology to solve problems
          and I'm always looking for new challenges.
        </p>
      </div>
      <div className="about-image-container relative top-0 right-0 mr-20">
        <div className="about-image-wrapper" style={{ marginLeft: "-150px" }}>
          <Image
            src="/self2.jpg"
            alt="Swanand"
            layout="responsive"
            width={370}
            height={370}
            className="about-image"
          />
        </div>
        <div
          className="flex flex-col justify-center mt-20 mr-20 space-y-5 p-x-10"
          style={{ marginLeft: "-80px" }}
        >
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
        </div>
      </div>
      <style jsx>{`
        .about-image-container {
          width: 370px;
        }
        .about-image-wrapper {
          display: inline-block;
          overflow: hidden;
          width: 100%;
          border-radius: 10%;
          transform: rotate(3deg);
        }
        .about-image-wrapper img {
          display: block;
          width: 100%;
        }
        .styled-paragraph {
          font-size: 16px;
          line-height: 1.6;
          max-width: 700px;
        }
      `}</style>
    </main>
  );
};

export default About;
