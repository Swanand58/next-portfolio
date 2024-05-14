"use client";

import React from "react";
import Image from "next/image";

const EducationPage: React.FC = () => {
  return (
    <main className="flex flex-wrap min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Education History
        </h1>
        <p className="text-center mb-4">
          I am currently pursuing a Master of Science in Computer Science at
          Rice University. I started my program in August 2023 and am expected
          to graduate in December 2024. I have taken courses in Parallel
          Computing, Grad Tools and Models in Data Science, Information
          retrieval , Machine Learning, and Deep Learning. I have also taken
          general courses to improve my core CS skills, such as Graduate
          Analysis of Algorithms and Web Development. Before coming to Rice, I
          attended Vishwakarma Institute of Technology in Pune, India, where I
          earned a Bachelor of Technology in Computer Engineering. I took
          courses related to Data Structures,Operating Systems, Automata Theory,
          Database Management System, Object-Oriented Programming, Machine
          Learning, Deep Learning.
        </p>
        <div className="text-center mb-6">
          <button
            className=" bg-gray-700 font-bold py-2 px-4 rounded hover:bg-slate-800 hover:text-slate-200"
            onClick={() => window.open("/Resume_SwanandKhonde.pdf", "_blank")}
          >
            Show Resume
          </button>
        </div>
        <div className="flex flex-col md:grid-cols-2 gap-4 mt-4">
          <div className=" p-4 bg-slate-500 rounded-lg shadow-md">
            <div className="flex  items-center mb-4">
              <Image
                src="/rice-logo.jpeg"
                alt="Rice University"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h2 className="text-xl font-bold">Rice University</h2>
                <p className="text-sm text-gray-300">
                  Masters in Computer Science
                </p>
                <p className="text-sm text-gray-300">Aug 2023 - Dec 2024</p>
              </div>
            </div>
            <ul className="list-disc ml-5">
              <li>
                <strong>Parallel Computing:</strong> Built Shared Memory
                Parallel Programs using Intel's Cilk Plus, OpenMP, MPI(Message
                Passing Interface), and CUDA(Compute Unified Device
                Architecture).
              </li>
              <li>
                <strong>Machine Learning with Graphs:</strong> content here
              </li>
              <li>
                <strong>Deep Learning in Vision and Langauge:</strong> content
                here
              </li>
              <li>
                <strong>Web Development:</strong> In my Web Development course,
                I strengthened and revised my frontend and backend skills. I
                built a fully functional social media application called
                RiceBook using React, and Node.js.
              </li>
            </ul>
          </div>
          <div className=" p-4 bg-slate-500 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="/vit-logo.jpeg"
                alt="Vishwakarma Institute of Technology"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h2 className="text-xl font-bold">
                  Vishwakarma Institute of Technology
                </h2>
                <p className="text-sm text-gray-300">
                  Bachelor of Technology in Computer Engineering
                </p>
                <p className="text-sm text-gray-300">Aug 2017 - Jun 2021</p>
              </div>
            </div>
            <ul className="list-disc ml-5">
              <li>
                <strong>Data Structures:</strong> Gained a thorough
                understanding of data structures and their applications in
                solving computational problems.
              </li>
              <li>
                <strong>Object-Oriented Programming:</strong> Learned the
                principles of object-oriented design and applied them in various
                programming projects.
              </li>
              <li>
                <strong>Python Programming:</strong> Acquired proficiency in
                Python programming and developed multiple applications using
                Python.
              </li>
              <li>
                <strong>Deep Learning</strong> Studied the fundamentals of deep
                learning and its applications. Built a deep learning project
                called document classification using TensorFlow and Ludwig.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EducationPage;
