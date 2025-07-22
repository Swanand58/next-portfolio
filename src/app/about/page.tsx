"use client";
import Image from "next/image";
import React from "react";
import ContactCardAbout from "../_components/contactabout";

const About: React.FC = () => {
  return (
    <main className="min-h-screen p-4 sm:p-9 flex flex-col sm:flex-row justify-between items-start">
      <div className="w-full sm:w-1/2 space-y-4 sm:space-y-8 py-2 sm:py-8 sm:text-center sm:mx-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center sm:text-center mt-0">
          Read More About Me
        </h1>
        <p className="styled-paragraph text-left sm:text-left">
          I am a Computer Science Master&apos;s student at Rice University,
          currently residing in Houston, Texas. My academic journey began with a
          Bachelor&apos;s in Computer Engineering from Vishwakarma Institute of
          Technology, Pune. Professionally, I have accumulated substantial
          experience working as a Software Engineer at HSBC Technology India,
          where I honed my skills and contributed to numerous impactful
          projects.
        </p>
        <p className="styled-paragraph text-left sm:text-left">
          I possess a solid foundation and hands-on experience in programming
          languages and frameworks such as Python, Java, JavaScript/TypeScript,
          Flask, React, and Spring Boot. At HSBC, I worked as a Full Stack
          Engineer in the Shared Infrastructure Services team within the Trade
          and Transaction Reporting department, where I developed the{" "}
          <a className="font-semibold">Load Trade Archiving Service</a>, a
          microservice that significantly improved data accessibility for
          business users. For this project, I was recognized with the{" "}
          <a className="font-semibold">Star Performer</a> Award in Q1 2023.
        </p>
        <p className="styled-paragraph text-left sm:text-left">
          In addition to my work at HSBC, I served as a{" "}
          <a className="font-semibold">
            founding engineer at Nedd Technologies - a startup from Houston,
            Texas{" "}
          </a>
          , where I directed the development of an ESG Platform. This involved
          implementing high-performance Flask-based RESTful services and
          designing a responsive Next.js User Interface. My leadership in this
          project also included configuring essential tools like Grafana and
          Azure AI services, leading to significant improvements in deployment
          efficiency and product reliability.
        </p>
        <p className="styled-paragraph text-left sm:text-left">
          Beyond my professional life, I am deeply passionate about music. I
          listen to songs and enjoy playing the guitar, which fuels my
          creativity and helps me unwind. My musical tastes are diverse, ranging
          from Linkin Park and Metallica to Bollywood music legends like Sonu
          Nigam, KK, and Shreya Ghoshal. Music is an integral part of my life,
          providing both inspiration and relaxation.
        </p>
      </div>
      <div className="w-full sm:w-1/2 sm:flex sm:flex-col sm:items-center mt-8">
        <div className="about-image-wrapper mx-auto sm:mr-0 sm:ml-auto">
          <Image
            src="https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSuo5NVYDtZJCXyI5lfBDiWwjRp3GYSosKErzv"
            alt="Swanand"
            width={370}
            height={370}
            className="about-image"
            loading="lazy"
            // priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <ContactCardAbout />
      </div>
      <style jsx>{`
        .about-image-wrapper {
          display: block;
          overflow: hidden;
          width: 100%;
          max-width: 370px;
          border-radius: 10%;
          margin-left: auto;
          margin-right: auto;
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
