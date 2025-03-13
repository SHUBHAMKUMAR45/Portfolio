export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 4,
    name: "Projects",
    href: "#project",
  },
  {
    id: 3,
    name: "Contact",
    href: "#contact",
  },
];



export const myProjects = [
  {
    title: "AI CODE ANALYST",
    desc: "The AI Code Analyst project is a web application built using the MERN stack (MongoDB, Express, React, Node.js) that leverages Google Geemi for enhanced analysis. The platform is designed to help developers and programmers assess and optimize their code through automated analysis. By integrating AI-powered insights, the tool analyzes code quality, identifies potential bugs, provides optimization suggestions, and improves code readability.",
    subdesc:
      "This project improves the coding workflow by assisting developers with accurate, real-time code reviews and actionable insights, making it easier to maintain high-quality code.",
    href: "https://github.com/SHUBHAMKUMAR45/ai-code-analyst",
    texture: "/textures/project/aicode.mp4",
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "CODE DECK",
    desc: "Code Deck is an online integrated development environment (IDE) built using React JS. It leverages Styled Components for styling and integrates with the Judge0 CE API via Rapid API for handling code submissions and execution. Axios is used to make API calls, and React Router is employed for seamless routing within the application. This platform allows users to write, test, and submit code directly from their browser.",
    subdesc:
      "This project provides a comprehensive online coding environment for developers.",
    href: "https://github.com/SHUBHAMKUMAR45/code-deck",
    texture: "/textures/project/CODEDECK.mp4",
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "RENOVO",
    desc: "The Renovo Project is a modern web application built using React JS and GSAP (GreenSock Animation Platform), designed to deliver an engaging, interactive user experience with smooth animations. The app focuses on providing dynamic content presentation and seamless transitions, making it visually appealing and intuitive.",
    subdesc:
      "The Renovo Project combines the power of React and GSAP to create a visually stunning and highly interactive web experience.",
    href: "https://github.com/SHUBHAMKUMAR45/RENOVO",
    texture: "/textures/project/RENOVO.mp4",
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "GAMING WEBSITE",
    desc: "The Gaming Website is an interactive platform designed for gamers, offering a sleek and visually engaging interface. Built with React JS and enhanced with GSAP animations, the website provides a smooth, dynamic experience as users explore various games and related content.",
    subdesc:
      "This website offers a modern, fun, and interactive platform for discovering and exploring games.",
    href: "https://github.com/SHUBHAMKUMAR45/Gamming-Website",
    texture: "/textures/project/GAME2.mp4",
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "HEALTH PLUS",
    desc: "The Health Website is an intuitive platform built with React that provides users with comprehensive health information, tools, and resources. It features interactive elements such as symptom checkers, appointment scheduling, and health trackers, designed to empower users to proactively manage their health and well-being.",
    subdesc:
      "The website aims to offer a seamless, user-friendly experience for individuals seeking to stay informed and take charge of their health.",
    href: "https://github.com/SHUBHAMKUMAR45/HEALTH-PLUS",
    texture: "/textures/project/HEA.mp4",
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "EMPLOYEE MANAGEMENT SYSTEM",
    desc: "The Employee Management System is a web application built with React JS and Firebase, designed to streamline HR processes and enhance employee management. The platform offers features such as employee profiles, attendance tracking, and performance evaluations, providing a comprehensive solution for managing human resources.",
    subdesc:
      "This application aims to simplify HR operations and improve employee management through a user-friendly, efficient platform.",
    href: "https://github.com/SHUBHAMKUMAR45/EMS",
    texture: "/textures/project/ems.mp4",
    logo: "/assets/logo.png",
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "Ecomzy",
    desc: "A modern, streamlined shopping bag application built with React.js, Redux Toolkit, and Tailwind CSS. React handles the component-based structure and smooth UI interactions. Redux Toolkit streamlines your state management, making it easy to keep track of items in your shopping bag, update quantities, and handle checkout processes. Tailwind CSS ensures your app looks sleek and responsive without spending hours on custom styling.",
    subdesc:
      "Built dynamic, visually appealing shopping experience where users can effortlessly browse, add, and remove items in their shopping bag.",
    href: "https://shopping-bag-livid.vercel.app/",
    texture: "/textures/project/ecomzyy.mp4",
    spotlight: "/assets/spotlight1.png",
  },
  {
    title: "Thought Saver",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "Utilize CSS in your resume to maintain consistency, enhance readability, and create a visually appealing layout while staying true to professional design principles.",
    href: "https://node-js-project-l0yo.onrender.com/",
    texture: "/textures/project/tought.mp4",
    spotlight: "/assets/spotlight2.png",
  },
  {
    title: "Obys Agency",
    desc: "Implemented modern web development techniques to create a vibrant and interactive user experience.",
    subdesc:
      "Demonstrated technical expertise and creativity in web development through the project.",
    href: "https://shubhamkumar45.github.io/OBYS-AGENCY/",
    texture: "/textures/project/obye.mp4",
    spotlight: "/assets/spotlight3.png",
  },
  {
    title: "Document Wallet",
    desc: "Node.js is your server-side backbone, ensuring scalable, high-performance handling of requests and operations. Express.js simplifies your server-side logic and routing, making it easy to manage HTTP requests and build out the API endpoints for your app.",
    subdesc:
      "EJS (Embedded JavaScript) is your templating engine, which dynamically generates HTML with minimal fuss, keeping your front-end and back-end closely connected.",
    href: "https://doc-wallets.onrender.com/",
    texture: "/textures/project/docsaveer.mp4",
    spotlight: "/assets/spotlight4.png",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
