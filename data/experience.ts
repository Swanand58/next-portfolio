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
    location: "Houston, United States",
    role: "Software Engineer Intern",
    period: "May 2024 - Present",
    skills: [
      "Next.js",
      "Tailwind css",
      "Python",
      "Flask",
      "Azure",
      "Postgres",
      "Redis",
      "Kafka",
    ],
    achievements: [
      "Leading the <b>ESG Platform</b> development from conception to launch, owning Flask-based <b>RESTful</b> services, handling over <b>1,000 API requests per second</b>.",
      "Developing a responsive and user-friendly <b>Next.js</b> application for clients, enhancing the overall user experience, achieving an overall user satisfaction score of <b>90%</b>.",
      "Building REST API endpoints from scratch using Python flask, improving back-end performance and usability.",
      "Designing and implementing a data model and data transformations for accurate and insightful sustainability reporting, identifying and correcting <b>500</b> data anomalies, reducing processing time by <b>10 hours per week</b>, and enabling over <b>100</b> sustainability reports with insights.",
      "Utilizing <b>Azure DevOps</b> to implement <b>CI/CD pipelines</b>, automated testing, and deployment strategies, significantly improving development efficiency and product reliability, reducing deployment time by <b>50%</b> and increasing product reliability with a <b>60%</b> decrease in production issues.",
    ],
  },
  {
    id: 2,
    company: "HSBC",
    companyLogo: "/hsbc.jpeg",
    location: "Pune, India",
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
      "Load Trade",
    ],
    achievements: [
      "Spearheaded development of Load Trade Archive Service, a microservice-based platform for <b>Bloomberg’s Load Trade</b> production instance.",
      "Enabled direct user access to XML and CSV trade files through a UI with different filters, reducing weekly IT team search time by <b>30 minutes</b> per member and significantly improving data accessibility and organization.",
      "Facilitated requirements gathering and feedback sessions with business users, creating a UI that streamlined access to trade files and improved data retrieval efficiency by ≈ <b>50%</b>.",
      "Earned <b>Star Performer</b> Award from HSBC in Q1 2023 for Load Trade Archive Service project, an honor awarded to only <b>20 individuals</b> organization-wide for exceptional performance.",
      "Deployed <b>Log Dream</b>, a logging solution with a user interface that simplified error tracking for production issues across <b>4 different services</b>, reducing log review time by <b>60%</b>.",
      "Authored a Python-based CR Checker Plugin for <b>Ansible Tower</b>, automating pre-deployment verification of <b>100% Change Requests</b> per month, enhancing compliance and reducing deployment errors by <b>85%</b>.",
      "Developed a Spring Boot service with API endpoint for <b>Kubernetes</b> deployments via Jenkins, integrating with ServiceNow for automated CR verification, ensuring <b>100% compliance</b> before production deployments.",
    ],
  },
  {
    id: 3,
    company: "Optimum Data Analytics",
    companyLogo: "/oda.jpeg",
    location: "Pune, India",
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
      "Conceptualized and executed <b>Document Classification using visual parameters</b>, a deep learning project aimed at streamlining document categorization (letters, emails, resumes, invoices, etc.) for user convenience.",
      "Employed a <b>Convolutional Neural Network (CNN)</b> model for classification, achieving a raw training accuracy of <b>95.7%</b> and a test accuracy of <b>83%.</b>",
      "Developed a web application using Python Flask, which allowed users to upload and classify documents with ease.",
    ],
  },
];

export { experiences };
export type { Experience };
