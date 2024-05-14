"use client";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { metadata } from "../layout";

const About: React.FC = () => {
  return (
    <main className="min-h-screen p-4 sm:p-9 flex flex-col sm:flex-row justify-between items-center sm:items-start">
      <div className="w-full sm:w-1/2 space-y-4 sm:space-y-8 py-4 sm:py-8 sm:text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center sm:text-center">
          Read more about me!
        </h1>
        <p className="styled-paragraph text-center sm:text-center">
          I am a Computer Science Master's Student at Rice University. I
          completed my bachelor's in Computer Engineering from Vishwakarma
          Institute of Technology, Pune. Since then, I have worked as a Software
          Engineer in HSBC Technology India.s
        </p>
        <p className="styled-paragraph text-center sm:text-center">
          I have good knowledge and hands-on experience in Python, Java,
          Javascript, and different frameworks like Flask, React, Spring Boot.
          Worked as a Full Stack Engineer in Shared Infrastructure Services team
          in Trade and Transaction Reporting department.
        </p>
        <p className="styled-paragraph text-center sm:text-center">
          I managed Droit software for our department. I developed utilities in
          Python and Spring boot which supported the business users. I wrote
          ansible playbooks and jenkins pipelines to strengthen and support the
          Devops practices in my team. Developed a POC of an AI chatbot in
          Python using tensorflow for which I received 'Pat on the Back' Hsbc
          Award in Q2 2022.
        </p>
        <p className="styled-paragraph text-center sm:text-center">
          Moreover, I developed 'load trade archiving service', a microservice
          which helped the business users to fetch relevant data from Load Trade
          application. For this, I was awarded with 'Star Performer' Hsbc Award
          in Q1 2023. I'm passionate about using technology to solve problems
          and I'm always looking for new challenges.
        </p>
      </div>
      <div className="w-full sm:w-auto mt-10 sm:mt-0 sm:mr-[80px] sm:ml-[80px] mr-[80px] ml-[160px]">
        <div className="about-image-wrapper">
          <Image
            src="/self2.jpg"
            alt="Swanand"
            layout="responsive"
            width={370}
            height={370}
            className="about-image"
          />
        </div>
        <div className="flex flex-col justify-center mt-20 mr-20 space-y-4 p-x-4 mb-12">
          <a
            href="https://github.com/Swanand58"
            className="flex items-center space-x-3"
          >
            <FaGithub className="text-2xl text-slate-400 rounded-lg hover:text-slate-600" />
            <span className="text-sm font-semibold hover:text-slate-500">
              Follow me on GitHub
            </span>
          </a>
          <a
            href="https://twitter.com/swanandkhonde_"
            className="flex items-center space-x-3"
          >
            <FaXTwitter className="text-2xl text-slate-400 rounded-lg hover:text-slate-600" />
            <span className="text-sm font-semibold hover:text-slate-500">
              Follow me on Twitter
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/swanandkhonde/"
            className="flex items-center space-x-3"
          >
            <FaLinkedin className="text-2xl text-slate-400 rounded-lg hover:text-slate-600" />
            <span className="text-sm font-semibold hover:text-slate-500">
              Follow me on LinkedIn
            </span>
          </a>
          <a
            href="mailto:swanandkhonde1999@gmail.com"
            className="flex items-center space-x-3"
          >
            <FaEnvelope className="text-2xl text-slate-400 rounded-lg hover:text-slate-600" />
            <span className="text-sm font-semibold hover:text-slate-500">
              Email me
            </span>
          </a>
        </div>
      </div>
      <style jsx>{`
        .about-image-wrapper {
          display: block;
          overflow: hidden;
          width: 100%;
          max-width: 370px;
          border-radius: 10%;
        }
        .about-image-wrapper img {
          display: block;
          width: 100%;
        }
        .styled-paragraph {
          font-size: 16px;
          line-height: 1.6;
          max-width: 100%;
        }
      `}</style>
    </main>
  );
};

export default About;
