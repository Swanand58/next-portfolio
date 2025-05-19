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
    id: 5,
    company: "Ford Motor Company",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDS7EPFbSk2PdA4b19KXiBwDqI5eOCgFY6jUoVx",
    location: "Irvine, California - United States",
    role: "Software Development Engineer II",
    period: "Jan 2025 - Present",
    skills: ["Next.js", "Python", "GCP", "Docker", "MongoDB", "FastAPI"],
    achievements: [
      "Contributed to development and validation of EV control software through software-in-the-loop (SIL) test automation frameworks.",
      "Developed a Next.js dashboarding tool to visualize 30GB+ of simulation data per test run, with built-in mass and cost tracking across vehicle variants.",
      "Built a FastAPI backend with MongoDB aggregation pipelines to process and serve high-volume regression data, enabling efficient time-series queries for EV signal visualization.",
      "Served as product owner for a business-facing logs viewer tool, enabling access to critical service logs and audit trails for monitoring sensitive data interactions.",
      "Designed a centralized FastAPI backend for the logs viewer, fetching data from BigQuery where logs were ingested via service-specific log sinks, enabling scalable and secure log access.",
      "Managed cloud infrastructure for apps using GCP services, including Cloud Run, Cloud Storage, scheduled jobs, and CI/CD pipelines for automated builds and deployments.",
    ],
  },
  {
    id: 4,
    company: "Rice University",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSWtYNVC7BG94PJxrjLhfp1aSq2RXoFOTwE5eU",
    location: "Houston, Texas - United States",
    role: "Graduate Teaching Assistant",
    period: "Jan 2024 - Dec 2024",
    skills: [
      "Next.js",
      "React",
      "Web Security",
      "Wireshark",
      "Javascript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    achievements: [
      "<b>Graduate Web Design and Development - Aug 2024 - Dec 2024</b>",
      "Guided students through web development principles, covering topics such as HTML, CSS, JavaScript, and modern frameworks like React, node.js and Express.js.",
      "Assisted in creating and grading assignments, ensuring that students grasped key concepts of front-end and back-end development.",
      "<b>Computer Security - Jan 2024 - May 2024</b>",
      "Designed and guided students through assignments focused on identifying and exploiting vulnerabilities in web applications, including bringing down sites by detecting and leveraging inconsistencies.",
      "Led lab sessions utilizing Wireshark to identify and analyze vulnerable network packets, enabling students to effectively fix security weaknesses in real-world scenarios.",
    ],
  },
  {
    id: 1,
    company: "Nedd Technologies",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSlN1WAIzsbDS9JyxWpzGHBEQPr4FnAmj1Xkif",
    location: "Houston, Texas - United States",
    role: "Founding Software Engineer",
    period: "May 2024 - Aug 2024",
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
      "Directed the end-to-end development of the ESG Platform, taking the project from conception to a fully functional demo within <b>2 months</b>.",
      "Implemented Flask-based RESTful services capable of handling over <b>1,000 API requests per second</b>, and designed a responsive <b>Next.js User Interface</b>.",
      "Configured a suite of essential tools, including <b>Grafana, MS Copilot</b>, and <b>Azure AI services</b>, on an <b>Azure Linux VM (version 9)</b>.",
      "Engineered and implemented a comprehensive data model, creating <b>60 psql database tables</b> covering Environment, Social, Governance, Ops, Regulatory, and Finance domains.",
      "Employed <b>Azure DevOps</b> to implement <b>CI/CD pipelines</b> and deployment strategies, reducing deployment time by <b>50%</b> and increasing product reliability with a <b>60%</b> decrease in production issues.",
    ],
  },
  {
    id: 2,
    company: "HSBC",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDS6UWgRZl1ru2LgTRcJ9nKpZSNYfVUtdaCXQks",
    location: "Pune, Maharashtra - India",
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
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSz0tvie5uchTWmMs5jqLy9wnpOilNY31tegIV",
    location: "Pune, Maharashtra - India",
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
      "Implemented an MLOps pipeline using Docker, TFX, and Jenkins for automated model tracking, version control, and deployment, reducing model update time by <b>30% </b>and ensuring continuous integration and delivery.",
      "Developed a web application using Python Flask, which allowed users to upload and classify documents with ease.",
    ],
  },
];

export { experiences };
export type { Experience };
