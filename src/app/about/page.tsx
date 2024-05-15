"use client";
import Image from "next/image";
import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { metadata } from "../layout";

const About: React.FC = () => {
  return (
    <main className="min-h-screen p-4 sm:p-9 flex flex-col sm:flex-row justify-between items-center sm:items-start">
      <div className="w-full sm:w-1/2 space-y-4 sm:space-y-8 py-2 sm:py-8 sm:text-center ">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center sm:text-center mt-0">
          Read more about me!
        </h1>
        <p className="styled-paragraph text-center sm:text-center">
          I am a Computer Science Master's student at Rice University, currently
          residing in Houston, Texas. My academic journey began with a
          Bachelor's in Computer Engineering from Vishwakarma Institute of
          Technology, Pune. Professionally, I have accumulated substantial
          experience working as a Software Engineer at HSBC Technology India,
          where I honed my skills and contributed to numerous impactful
          projects.
        </p>
        <p className="styled-paragraph text-center sm:text-center">
          I possess a solid foundation and hands-on experience in programming
          languages and frameworks such as Python, Java, JavaScript/TypeScript,
          Flask, React, and Spring Boot. At HSBC, I worked as a Full Stack
          Engineer in the Shared Infrastructure Services team within the Trade
          and Transaction Reporting department.
        </p>
        <p className="styled-paragraph text-center sm:text-center">
          One of my notable projects involved developing a proof-of-concept AI
          SRE chatbot in Python using TensorFlow, which earned me the 'Pat on
          the Back' Award from HSBC in Q2 2022. Additionally, I developed the
          'Load Trade Archiving Service', a microservice that significantly
          improved data accessibility for business users. For this project, I
          was recognized with the 'Star Performer' Award in Q1 2023.
        </p>
        <p className="styled-paragraph text-center sm:text-center">
          Beyond my professional life, I am deeply passionate about music. I
          listen to songs and enjoy playing the guitar, which fuels my
          creativity and helps me unwind. My musical tastes are diverse, ranging
          from Linkin Park and Metallica to Bollywood music legends like Sonu
          Nigam, KK, and Shreya Ghoshal. Music is an integral part of my life,
          providing both inspiration and relaxation
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
