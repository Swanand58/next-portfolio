interface Article {
  id: number;
  date: string;
  title: string;
  summary: string;
  link: string;
  isExternal: boolean;
}

const articles: Article[] = [
  {
    id: 2,
    date: "28 July 2020",
    title: "Patents in Quantum Computing",
    summary:
      "Quantum Computing can be simply defined as “Use of quantum effects to store and compute data”. Quantum computing is emerging as a gamechanger in today’s computer industry. But what is the need of quantum computing? Today we use semiconductor technology for computers. By increasing the number of transistors in given area we are increasing the capacity of data storage. But we can’t keep on reducing the size of transistors.",
    link: "/articles/quantum-computing",
    isExternal: false,
  },
  {
    id: 4,
    date: "23 April 2024",
    title:
      "Enhancing Recommender Systems through Knowledge Graphs: Approaches, Comparisons, and Future Directions (Survey)",
    summary:
      "Recommender systems are critical in filtering vast amount of information, helping users in discovering the most relevant items. The integration of Knowledge Graphs (KG) into recommender systems offers a well defined method for enhancing the recommendation performance using semantic relationships between entities. This survey investigates different KG based methodologies that have recently proposed to improve recommender systems.  ",
    link: "/articles/enhancing-recommender-system",
    isExternal: false,
  },
  {
    id: 1,
    date: "01 April 2022",
    title:
      "Refactoring from Monolithic to Microservices based Architecture. (Challenges and Solution)",
    summary:
      "Monolithic Architecture -  A monolithic architecture-based application is typically a system in which all the modules are packaged together as a single deployable unitof execution. A monolithic application typically has a layered design, with separate layers for UI, Business Logic, and Database. For example, a client-side UI (desktop or web-based), a server-side application, and data access.",
    link: "/articles/refactoring-from-monolithic-to-microservices-based-architecture",
    isExternal: false,
  },
  {
    id: 3,
    date: "1 July 2020",
    title: "Patents in Facial Recognition",
    summary:
      "Facial recognition software is a technology that can detect and identify a human face by an image or by a video stream or a live stream through cameras. Though the term facial recognition looks fairly simple, it is not! The term facial detection and facial recognition are often confused as being synonymous and are used interchangeably. However, there is a major difference between the two. A facial detection program only detects a face whereas facial recognition detects a face as well as identifies the person.   Published: Photon Legal",
    link: "https://photonlegal.com/patents-in-facial-recognition/",
    isExternal: true,
  },
];

export { articles };

export type { Article };
