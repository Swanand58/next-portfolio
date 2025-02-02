interface WorkExperienceType {
  id: string;
  companyLogo: string;
  companyName: string;
  role: string;
  duration: string;
}

const workExperiences: WorkExperienceType[] = [
  {
    id: "ford",
    companyLogo: "/ford.webp",
    companyName: "Ford Motor Company",
    role: "Software Engineer",
    duration: "Jan 2025 - Present",
  },
  {
    id: "rice",
    companyLogo: "/rice-logo.jpeg",
    companyName: "Rice University",
    role: "Graduate Teaching Assistant",
    duration: "Jan 2024 - Dec 2024",
  },
  {
    id: "nedd",
    companyLogo: "/nedd.jpeg",
    companyName: "Nedd Technologies",
    role: "Software Engineer Intern",
    duration: "May 2024 - Aug 2024",
  },
  {
    id: "hsbc",
    companyLogo: "/hsbc.jpeg",
    companyName: "HSBC",
    role: "Software Engineer",
    duration: "Aug 2021 - Jun 2023",
  },
  // {
  //   id: "xceed",
  //   companyLogo: "/xceed.jpeg",
  //   companyName: "Xceed Imagination",
  //   role: "Software Engineer Intern",
  //   duration: "Jan 2021 - July 2021",
  // },
  {
    id: "oda",
    companyLogo: "/oda.jpeg",
    companyName: "Optimum Data Analytics",
    role: "Machine Learning Engineer Intern",
    duration: "Aug 2019 - Jan 2020",
  },
  {
    id: "iauro",
    companyLogo: "/iauro.jpeg",
    companyName: "Iauro Systems",
    role: "Software Engineer Intern",
    duration: "June 2018 - Aug 2018",
  },
];

export { workExperiences };
export type { WorkExperienceType };
