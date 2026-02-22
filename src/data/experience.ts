export interface Experience {
  id: number;
  company: string;
  companyLogo: string;
  location: string;
  role: string;
  period: string;
  skills: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 5,
    company: "Ford Motor Company",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDS7EPFbSk2PdA4b19KXiBwDqI5eOCgFY6jUoVx",
    location: "Long Beach, California - United States",
    role: "Software Engineer - Advanced EV Systems, Skunk Works",
    period: "Jan 2025 - Present",
    skills: ["Next.js", "Python", "GCP", "Docker", "MongoDB", "FastAPI"],
    achievements: [
      "Designed and built a Next.js analytics dashboard to visualize <b>30GB+</b> of EV software-in-the-loop (SIL) regression test data per run, enabling engineers to explore and analyze vehicle signals across thermal, battery, and control systems.",
      "Led end-to-end development of a production-grade Bill of Materials (BOM) quality dashboard for <b>21 vehicle variants</b> with ~<b>35K parts</b> per variant, implementing <b>13 quality checks</b> critical to part release, cost auditing, and sourcing decisions.",
      "Delivered a business-critical BOM quality platform to production within <b>15 days</b>, owning frontend (Next.js), backend (FastAPI), data pipeline, and cloud infrastructure end-to-end.",
      "Designed an event-driven data pipeline using GCP Eventarc, Cloud Storage triggers, scheduled jobs, and MongoDB, enabling near real-time ingestion, validation, and visualization of BOM data for <b>200+ users</b> across the ECM organization.",
      "Replaced manual Excel-based audit reporting with a fully automated pipeline generating validated reports and dashboards, significantly reducing audit turnaround time and eliminating human error.",
      "Built executive-facing change action and performance dashboards for C-suite stakeholders to track ownership and approval bottlenecks in vehicle part release workflows.",
      "Developed software release management tools for over-the-air (OTA) update workflows, building Next.js frontends and FastAPI backends to manage vehicle software releases at scale.",
      "Built AI-assisted automation to remediate <b>42+ production security audit findings</b>, accelerating vulnerability fixes and improving API security compliance.",
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
      "Spearheaded development of Load Trade Archive Service, a microservice-based platform for <b>Bloomberg's Load Trade</b> production instance.",
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
