"use client";

import React from "react";
import Image from "next/image";

const EducationPage: React.FC = () => {
  return (
    <main className="flex flex-wrap min-h-screen p-8">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Education History
        </h1>
        <p className="text-justify mb-4">
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
          <div className="p-4 bg-slate-500 hover:bg-slate-800 rounded-lg shadow-md">
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
            <ul className="list-disc ml-5 p-y-4">
              <li className="mb-2">
                <strong className=" text-lg">Parallel Computing:</strong> Built
                shared memory parallel programs using Intel's Cilk Plus, OpenMP,
                MPI, and CUDA. Studied parallel algorithm design, decomposition
                techniques, and performance analysis. Gained hands-on experience
                with GPU programming and warehouse-scale computing. Analyzed
                scalability and parallel efficiency, and identified scaling
                losses using advanced tools.
              </li>
              <li className="mb-2">
                <strong className="text-lg">
                  Machine Learning with Graphs:
                </strong>{" "}
                Developed skills in graph-based machine learning algorithms,
                including graph neural networks, spectral graph theory, and
                graph embeddings. Implemented a music recommendation system
                using Policy-guided Path Reasoning (PGPR) on a Spotify dataset,
                focusing on scalability, interpretability, and performance.
                Analyzed song features and constructed knowledge graphs to
                enhance recommendation accuracy and explainability.
              </li>
              <li className="mb-2">
                <strong className="text-lg">
                  Deep Learning in Vision and Langauge:
                </strong>{" "}
                Studied visual recognition and language understanding using deep
                learning models like CNNs and Transformers. Implemented an image
                captioning model, fine-tuned on synthetic data, to evaluate the
                impact on model performance. Gained hands-on experience with GPU
                programming, pre-trained models like CLIP, and techniques such
                as image retrieval and text-to-image generation.
              </li>
              <li className="mb-2">
                <strong className=" text-lg">Web Development:</strong> Created
                multi-user web applications using the MERN stack. Gained
                expertise in front-end development with HTML, CSS, and
                JavaScript, and back-end development with React.js, Node.js,
                Express, and MongoDB. Implemented industry best practices like
                test-driven development and version control. Developed a fully
                functional, scalable social media application called RiceBook,
                incorporating modern web frameworks and design patterns.
              </li>
            </ul>
          </div>
          <div className=" p-4 bg-slate-500 hover:bg-slate-800 rounded-lg shadow-md">
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
              <li className="mb-2">
                <strong>Data Structures:</strong> Gained a thorough
                understanding of data structures and their applications in
                solving computational problems.
              </li>
              <li className="mb-2">
                <strong>Object-Oriented Programming:</strong> Learned the
                principles of object-oriented design and applied them in various
                programming projects.
              </li>
              <li className="mb-2">
                <strong>Python Programming:</strong> Acquired proficiency in
                Python programming and developed multiple applications using
                Python.
              </li>
              <li className="mb-2">
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
