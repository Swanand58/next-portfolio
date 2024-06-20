interface Experience {
  id: number;
  company: string;
  companyLogo: string;
  location: string;
  role: string;
  period: string;
  skills: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Nedd Technologies",
    companyLogo: "/nedd.jpeg",
    location: "Houston, Texas, United States",
    role: "Software Engineer 1 [Internship]",
    period: "May 2024 - Present",
    skills: ["Next.js", "Tailwind css", "Python", "Flask", "Azure", "Postgres"],
    achievements: [
      "Leading the development of the ESG platform from conception to launch, ensuring robust architecture and efficient data management.",
      "Developing a responsive and user-friendly Next.js application for clients, enhancing the overall user experience.",
      "Building REST API endpoints from scratch using Python flask, improving back-end performance and usability.",
      "Designing and implementing a data model and data transformations for accurate and insightful sustainability reporting.",
      "Utilizing Azure DevOps to implement CI/CD pipelines, automated testing, and deployment strategies, significantly improving development efficiency and product reliability.",
    ],
  },
  {
    id: 2,
    company: "HSBC",
    companyLogo: "/hsbc.jpeg",
    location: "Pune, Maharashtra, India",
    role: "Software Engineer",
    period: "Aug 2021 - June 2023",
    skills: [
      "Spring Boot",
      "Python",
      "Ansible",
      "Droit",
      "Service Now",
      "Node.js",
      "Oracle DB",
      "React",
      "Unix",
    ],
    achievements: [
      "Designed and developed ‘Load Trade Archiving Service’, a microservice platform using API gateways",
      "Utilized python flask to implement robust backend service APIs, complemented by React for frontend development, significantly improving data accessibility and reducing weekly IT team search time by 30 mins per team member",
      "Received ‘Star Performer’ Award from HSBC in Q1, 2023 for ‘Load Trade Archiving Service’ project, an award presented to only 20 individuals organization-wide for exceptional performance.",
      "Developed ‘Service Now checker plugin’, an ansible callback plugin to validate change record details before deploying changes to production",
      "Created a spring boot application to replicate Service Now checker plugin, which provided api endpoints to validate the change records for deployments using tools other than ansible (example - Jenkins)",
      "Collaborated with AI team at HSBC and demonstrated a proof-of-concept of deep learning chatbot which answered frequently asked questions by business users. Received “Pat on the back” Award from HSBC in Q2, 2022 for this project.",
      "Managed Unix server deployments, supported diverse tools, and oversaw environments including UAT, OAT, and production",
    ],
  },
  {
    id: 3,
    company: "Optimum Data Analytics",
    companyLogo: "/oda.jpeg",
    location: "Pune, Maharashtra, India",
    role: "Machine Learning Engineer Intern",
    period: "Aug 2019 - Jan 2020",
    skills: [
      "Python",
      "Flask",
      "Ludwig",
      "Tensorflow",
      "Pandas",
      "MySql",
      "Deep Learning",
    ],
    achievements: [
      "Conceptualized and executed 'Document Classification using visual parameters', a deep learning project aimed at streamlining document categorization (letters, emails, resumes, invoices, etc.) for user convenience.",
      "Employed a Convolutional Neural Network (CNN) model for classification, achieving a raw training accuracy of 95.7% and a test accuracy of 83%.",
      "Developed a web application using Python Flask, which allowed users to upload and classify documents with ease.",
    ],
  },
];

export { experiences };
export type { Experience };
