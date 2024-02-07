import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  meta,
  threejs,
  ecommerce,
  mapclone,
  travel,
  chatbot,
  elites,
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
    title: "Frontend Developer",
    icon: javascript,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Database Administrator",
    icon: mongodb,
  },
  {
    title: "Three.js Developer",
    icon: threejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "redux",
    icon: redux,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "MIT-WPU",
    icon: meta,
    iconBg: "#383E56",
    date: "August 2021 - December 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "DataBase Administration",
    company_name: "MIT-WPU",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Designing and implementing database solutions to meet business requirements and optimize performance.",
      "Managing database systems, including installation, configuration, monitoring, and maintenance tasks.",
      "Ensuring data security and integrity through regular backups, disaster recovery planning, and access controls.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "MIT-WPU",
    icon: meta,
    iconBg: "#383E56",
    date: "July 2022 - October 2023",
    points: [
      "Designing and implementing database solutions to meet business requirements and optimize performance.",
      "Managing database systems, including installation, configuration, monitoring, and maintenance tasks.",
      "Ensuring data security and integrity through regular backups, disaster recovery planning, and access controls.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "MIT-WPU",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mohit proved me wrong.",
    name: "Pepper Potts",
    designation: "CEO",
    company: "Stark Industries ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mohit does.",
    name: "Norman Osborn",
    designation: "Green Goblin",
    company: "Oscorp Industries",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mohit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bruce Wayne",
    designation: "Dresses as Bat",
    company: "Wayne Enterprises ",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

const projects = [
  {
    name: "Travel Website",
    description:
      "Developing and maintained a dynamic travel website, offering comprehensive travel information, booking options, and user friendly navigation.and Custom made Routes for better travel experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Swappycoder/travel_react-app",
    live_demo_link: "https://travelwithyourself.netlify.app/",
  },
  {
    name: "MapClone",
    description:
      "Sub part for Travel website for Implementation of custom routes ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Mapbox",
        color: "pink-text-gradient",
      },
    ],
    image: mapclone,
    source_code_link: "https://github.com/Swappycoder/google_map_clone",
    live_demo_link: "https://mapsio.netlify.app/",
  },
  {
    name: "Ecommerce App",
    description:
      " developed an e-commerce website that provides a seamless shopping experience for customers. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Swappycoder/shoplifting-website",
    live_demo_link: "https://flipstart.netlify.app/",
  },
  {
    name: "Chatbot",
    description:
      "Developed a chatbot that can communicate with users in natural language.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "ChatGpt API",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Swappycoder/chatbot",
    live_demo_link: "/",
  },
  {
    name: "Elites",
    description:
      "A Responsive and interactive Hotel Booking website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express Js",
        color: "pink-text-gradient",
      },
    ],
    image: elites,
    source_code_link: "https://github.com/Swappycoder/FSD-Mini-project",
    live_demo_link: "https://fsd-mini-project-mjqn.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
