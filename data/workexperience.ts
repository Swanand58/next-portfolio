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
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDS7EPFbSk2PdA4b19KXiBwDqI5eOCgFY6jUoVx",
    companyName: "Ford Motor Company",
    role: "Software Development Engineer II",
    duration: "Jan 2025 - Present",
  },
  {
    id: "rice",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSWtYNVC7BG94PJxrjLhfp1aSq2RXoFOTwE5eU",
    companyName: "Rice University",
    role: "Graduate Teaching Assistant",
    duration: "Jan 2024 - Dec 2024",
  },
  {
    id: "nedd",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSlN1WAIzsbDS9JyxWpzGHBEQPr4FnAmj1Xkif",
    companyName: "Nedd Technologies",
    role: "Founding Software Engineer",
    duration: "May 2024 - Aug 2024",
  },
  {
    id: "hsbc",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDS6UWgRZl1ru2LgTRcJ9nKpZSNYfVUtdaCXQks",
    companyName: "HSBC",
    role: "Software Engineer",
    duration: "Aug 2021 - Jun 2023",
  },

  {
    id: "oda",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDSz0tvie5uchTWmMs5jqLy9wnpOilNY31tegIV",
    companyName: "Optimum Data Analytics",
    role: "Machine Learning Engineer Intern",
    duration: "Aug 2019 - Jan 2020",
  },
  {
    id: "iauro",
    companyLogo:
      "https://f85w27gq4v.ufs.sh/f/l2ptklkzsbDS91K9gPeqxwOWtph7XCrUmyF4IYouMblS5eKV",
    companyName: "Iauro Systems",
    role: "Software Engineer Intern",
    duration: "June 2018 - Aug 2018",
  },
];

export { workExperiences };
export type { WorkExperienceType };
