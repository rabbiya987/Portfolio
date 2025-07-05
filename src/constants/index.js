import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  acmsigsac,
  tech,
  ctf,
  brainybot,
  crimeview,
  ciphervault,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Treasurer & Executive Member  ",
    company_name: "ACM SIGSAC DUET",
    icon: acmsigsac,
    iconBg: "#E6DEDD",
    date: "Oct’ 2024 – Present ",
    points: [
      "Served as Treasurer while actively contributing to the executive body beyond financial responsibilities.",
 "Collaborated with the organizing team for events and competitions, ensuring smooth execution",
 "Led and facilitated team meetings, offering guidance and strategic direction",
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "Tech Hierarchy",
    icon: tech,
    iconBg: "#f7f7f7",
    date: "Aug 2024 - June 2025",
    points: [
      "Managed and optimized content across multiple social platforms",
 "Designed engagement strategies and contributed to increased reach and brand visibility",
 "Collaborated with creative and technical teams to align posts with ongoing tech trends",
    ],
  },
  {
    title: "Capture the Flag (CTF) Achievements",
    company_name: "",
    icon: ctf,
    iconBg: "#000000",
    date: "",
    points: [
      " Top 20 – Digital Pakistan Cyber Hackathon 2024 (Ignite – National Technology Fund) Represented Team DARK DIAMONDS tackled reverse engineering, cryptography, web, and forensics challenges",
 "In 20s – Berzerk CTF, FAST University Demonstrated strong skills in offensive security and teamwork under pressure",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Intrusion Detection System",
    description:
      "Built an IDS capable of identifying malicious input patterns using rule-based logic to enhance defensive security awareness.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "security",
        color: "green-text-gradient",
      },
      {
        name: "rule-based",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // replace with actual image import
    source_code_link: "https://github.com/rabbiya987/Intrusion-Detection-System", // replace with actual link
  },
  {
    name: "Access Control System",
    description:
      "Designed a secure login system with role-based access control and brute-force protection to enforce authentication security.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "rbac",
        color: "green-text-gradient",
      },
      {
        name: "security",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // replace with actual image import
    source_code_link: "https://github.com/rabbiya987/Access_Control_System", // replace with actual link
  },
  {
    name: "CipherVault",
    description:
      "A GUI-based encryption and decryption tool supporting multiple cryptographic algorithms for secure data handling.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "encryption",
        color: "pink-text-gradient",
      },
    ],
    image: ciphervault, // replace with actual image import
    source_code_link: "https://github.com/rabbiya987/CipherVault", 
  },
  {
    name: "CrimeView360",
    description:
      "An interactive crime data analysis and visualization platform that supports EDA, hotspot detection, and trend analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: crimeview, // replace with actual image import
    source_code_link: "https://github.com/rabbiya987/CrimeView360", // replace with actual link
  },
  {
    name: "Brainy Bot",
    description:
      "An AI-powered chatbot built with Cohere’s NLP API and Flask, designed with secure form handling and dynamic response capabilities.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "cohere-api",
        color: "green-text-gradient",
      },
      {
        name: "html-css-js",
        color: "pink-text-gradient",
      },
    ],
    image: brainybot, // replace with actual image import
    source_code_link: "https://github.com/rabbiya987/BrainyBot", // replace with actual link
  },
];


export { services, technologies, experiences, testimonials, projects };
