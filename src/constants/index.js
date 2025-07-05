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
  Network,
  Dockercert,
  Cloud,  
  Darkweb,  
  Database,    
  EHE,  
  Google,  
  IntroToCyber,  
  Metasploit,  
  Mysql,    
  Pentesting,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "cert",
    title: "Certs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Penetration Tester",
    icon: web,
  },
  {
    title: "Vulnerability Assessments",
    icon: mobile,
  },
  {
    title: "CTF Creator",
    icon: creator,
  },
];

const technologies = [
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
  "skillName": "Kali Linux"
},
{
  "skillName": "Vulnerability Assessment"
},
{
  "skillName": "Penetration Testing"
},
{
  "skillName": "Network Analysis"
},
{
  "skillName": "Metasploit"
},
{
  "skillName": "Machine Learning"
},
{
  "skillName": "MySQL"
},
{
  "skillName": "Python"
},
{
  "skillName": "Java"
},
{
  "skillName": "C++"
},
{
  "skillName": "HTML/CSS"
},
{
  "skillName": "OOP"
},
{
  "skillName": "Wireshark"
},
{
  "skillName": "Burp Suite"
},
{
  "skillName": "CTF Challenge Development"
},
{
  "skillName": "Team Coordination"
},
{
  "skillName": "Decision-making"
},
{
  "skillName": "Adaptability"
},
{
  "skillName": "Resource Management"
},
{
  "skillName": "Strategic Planning"
},
{
  "skillName": "Project Delegation"
},
{
  "skillName": "Communication & Public Speaking"
}
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

const certificates = [
  {
  name: "Ethical Hacking Essentials",
  description: "EC-Council",
  tags: [
    {
      name: "ethical hacking",
      color: "red-text-gradient",
    },
  ],
  image: EHE,
  source_code_link: "https://www.coursera.org/account/accomplishments/certificate/Y6VBPBJJO5YV",
},
{
  name: "Google Cybersecurity Specialization",
  description: "Professional Certificate by Google",
  tags: [
    {
      name: "cybersecurity",
      color: "yellow-text-gradient",
    },
  ],
  image: Google,
  source_code_link: "https://www.coursera.org/account/accomplishments/specialization/RQELGLBHNY8H",
},
{
  name: "Introduction to Cybersecurity",
  description: "CISCO Learning",
  tags: [
    {
      name: "cybersecurity",
      color: "blue-text-gradient",
    },
  ],
  image: IntroToCyber,
  source_code_link: "https://www.credly.com/badges/45845591-8f1a-4e17-b5ca-4ae259816ec1/linked_in_profile",
},
{
  name: "Metasploit for Beginners: Ethical Penetration Testing",
  description: "Coursera",
  tags: [
    {
      name: "metasploit",
      color: "pink-text-gradient",
    },
  ],
  image: Metasploit,
  source_code_link: "https://www.coursera.org/account/accomplishments/records/SBTQTZBX44EA",
},
  {
    name: "Networking Basics",
    description:
      "CISCO Learning",
    tags: [
      {
        name: "networking",
        color: "blue-text-gradient",
      },
    ],
    image: Network,
    source_code_link: "https://www.credly.com/badges/fcc330f9-3d02-4249-abd2-e729d2938c03/linked_in_profile", // replace with actual link
  },
  {
    name: "Penetration Testing, Threat Hunting, and Cryptography",
    description:
      "IBM",
    tags: [
      {
        name: "networking",
        color: "blue-text-gradient",
      },
    ],
    image: Network,
    source_code_link: "https://www.coursera.org/account/accomplishments/verify/0Z387FMED8MD", // replace with actual link
  },

  {
  name: "Introduction to Security Principles in Cloud Computing",
  description: "Google Cloud Training Online",
  tags: [
    {
      name: "cloud",
      color: "blue-text-gradient",
    },
  ],
  image: Cloud,
  source_code_link: "https://coursera.org/verify/14VLSD9JIVMH",
},
{
  name: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
  description: "EC-Council",
  tags: [
    {
      name: "darkweb",
      color: "purple-text-gradient",
    },
  ],
  image: Darkweb,
  source_code_link: "https://codered.eccouncil.org/certificate/071cefc0-4d38-4418-8f8a-f1e55ead3a62?logged=true",
},
{
  name: "Databases and SQL for Data Science with Python",
  description: "IBM",
  tags: [
    {
      name: "database",
      color: "green-text-gradient",
    },
  ],
  image: Database,
  source_code_link: "https://www.coursera.org/account/accomplishments/certificate/JNVB31D9K8OY",
},
{
  name: "Introduction to Docker",
  description: "Google",
  tags: [
    {
      name: "docker",
      color: "orange-text-gradient",
    },
  ],
  image: Dockercert,
  source_code_link: "https://coursera.org/verify/CRBD3D7PV7QY",
},

]


export { services, technologies, experiences, testimonials, projects, certificates };
