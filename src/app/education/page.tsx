"use client";

import Image from "next/image";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RESUME_URL } from "@/lib/constants";

export default function EducationPage() {
  const handleResumeClick = (): void => {
    posthog.capture("Resume Clicked", {
      section: "Education Page",
    });

    window.open(RESUME_URL, "_blank");
  };

  return (
    <main className="min-h-screen flex-wrap p-8">
      <div className="container mx-auto">
        <h1 className="mb-6 text-center text-3xl font-bold">Education</h1>

        <p className="mb-4 text-left">
          I graduated with a Master of Science in Computer Science from Rice
          University in December 2024. During my program, I took courses in
          Parallel Computing, Graduate Tools and Models in Data Science,
          Information Retrieval, Machine Learning with Graphs, and Deep Learning
          in Vision and Language. Additionally, I strengthened my core CS skills
          by taking Graduate Design Analysis of Algorithms and Web Design and
          Development. Before coming to Rice, I attended Vishwakarma Institute
          of Technology in Pune, India, where I earned a Bachelor of Technology
          in Computer Engineering. My undergraduate coursework included Data
          Structures, Operating Systems, Automata Theory, Database Management
          Systems, Computer Networks, Compiler Design, Object-Oriented
          Programming, Machine Learning, and Deep Learning.
        </p>

        <div className="mb-8 mt-8 text-center">
          <Button onClick={handleResumeClick}>Show Resume</Button>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {/* Rice University */}
          <Card className="transition-colors hover:bg-accent/50">
            <CardHeader className="pb-4">
              <div className="mb-4 flex items-center">
                <Image
                  src="https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSWtYNVC7BG94PJxrjLhfp1aSq2RXoFOTwE5eU"
                  alt="Rice University"
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <div>
                  <h2 className="text-xl font-bold">Rice University</h2>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Houston, Texas, United States
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Masters in Computer Science
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aug 2023 - Dec 2024
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong className="text-lg">Parallel Computing:</strong> Built
                  shared memory parallel programs using Intel&apos;s Cilk Plus,
                  OpenMP, MPI, and CUDA. Studied parallel algorithm design,
                  decomposition techniques, and performance analysis. Gained
                  hands-on experience with GPU programming and warehouse-scale
                  computing. Analyzed scalability and parallel efficiency, and
                  identified scaling losses using advanced tools.
                </li>
                <li>
                  <strong className="text-lg">
                    Machine Learning with Graphs:
                  </strong>{" "}
                  Developed skills in graph-based machine learning algorithms,
                  including graph neural networks, spectral graph theory, and
                  graph embeddings. Implemented a music recommendation system
                  using Policy-guided Path Reasoning (PGPR) on a Spotify
                  dataset, focusing on scalability, interpretability, and
                  performance. Analyzed song features and constructed knowledge
                  graphs to enhance recommendation accuracy and explainability.
                </li>
                <li>
                  <strong className="text-lg">
                    Deep Learning in Vision and Language:
                  </strong>{" "}
                  Studied visual recognition and language understanding using
                  deep learning models like CNNs and Transformers. Implemented
                  an image captioning model, fine-tuned on synthetic data, to
                  evaluate the impact on model performance. Gained hands-on
                  experience with GPU programming, pre-trained models like CLIP,
                  and techniques such as image retrieval and text-to-image
                  generation.
                </li>
                <li>
                  <strong className="text-lg">Web Development:</strong> Created
                  multi-user web applications using the MERN stack. Gained
                  expertise in front-end development with HTML, CSS, React.js
                  and JavaScript, and back-end development with Node.js,
                  Express, and MongoDB. Implemented industry best practices like
                  test-driven development and version control. Developed a fully
                  functional, scalable social media application called RiceBook,
                  incorporating modern web frameworks and design patterns.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* VIT */}
          <Card className="transition-colors hover:bg-accent/50">
            <CardHeader className="pb-4">
              <div className="mb-4 flex items-center">
                <Image
                  src="https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSNt3dgByhYtQn0B6lU7bCGvW5zAaTZRx9Spye"
                  alt="Vishwakarma Institute of Technology"
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <div>
                  <h2 className="text-xl font-bold">
                    Vishwakarma Institute of Technology
                  </h2>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Pune, Maharashtra, India
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bachelor of Technology in Computer Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aug 2017 - Jun 2021
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <strong>Data Structures:</strong> Gained a thorough
                  understanding of data structures and their applications in
                  solving computational problems.
                </li>
                <li>
                  <strong>Object-Oriented Programming:</strong> Learned the
                  principles of object-oriented design and applied them in
                  various programming projects.
                </li>
                <li>
                  <strong>Python Programming:</strong> Acquired proficiency in
                  Python programming and developed multiple applications using
                  Python.
                </li>
                <li>
                  <strong>Deep Learning:</strong> Studied the fundamentals of
                  deep learning and its applications. Built a deep learning
                  project called document classification using TensorFlow and
                  Ludwig.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
