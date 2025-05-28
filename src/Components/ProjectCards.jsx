import React, { useState } from "react";
import "../App.css";
import "./Pages/Projects.css";
import styles from "../styles/Global.module.scss";
import { useInView } from "react-intersection-observer";
import ProjectItems from "./ProjectItems";

function ProjectCards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const expandCard = (index) => {
    setExpandedIndex(index);
  };

  const closeCard = () => {
    setExpandedIndex(null);
  };

  const projectData = [
    // Array of card data with additional product details if necessary
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/budgetpc.mp4",
      mvideo: "/devportfolio/videos/budgetmobile.mov",
      projectName: "myFinance Budgeting App",
      tech: "MongoDB, Express, React, Node (MERN stack)",
      info: "myFinance Budget App is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) that enables users to track income, set budgets, and manage expenses. The frontend leverages React with React Router and Hooks for state and navigation, while the backend uses Node.js and Express to expose secure RESTful APIs. MongoDB stores user data and transactions, with JWT-based authentication for secure access.",
      info2: "Designed with a mobile-first approach, the UI uses CSS Flexbox and Grid for responsiveness. Features include real-time notifications via react-toastify, intuitive UX, and clean component architecture. This project demonstrates proficiency in full-stack development, API design, responsive UI, and secure user workflows.",
      path: "https://markel-bradford.github.io/BudgetApp",
      ghpath: "https://github.com/Markel-Bradford/BudgetApp"
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/Pthread.mp4",
      mvideo: "/devportfolio/videos/pthreadsmobile.mp4",
      projectName: "E-Commerce Template",
      tech: "NextJS, React, TS, TailwindCSS",
      info: "E-Commerce Platform built with Next.js and Tailwind CSS, showcasing modern frontend development and deployment practices. The project leverages Next.js features like server-side rendering, static generation, and dynamic routing for performance and SEO. Tailwind CSS powers the responsive UI, with custom components including navbars, hero sections, and product cards.",
      info2: "Dynamic interactions are enhanced through custom animations defined in the Tailwind config, providing smooth transitions and engaging UI feedback. The app is fully responsive, adapting seamlessly to various devices. Deployed on Vercel with GitHub integration for CI/CD and version control, this project demonstrates end-to-end skills in building and maintaining production-ready web applications.",
      path: "https://nextproducttemplate.vercel.app/",
      ghpath: "https://github.com/Markel-Bradford/nextproducttemplate"
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/Safarigame.mp4",
      mvideo: "/devportfolio/videos/safarimobile.mp4",
      projectName: "Safari Guessing Game",
      tech: "React, JS, HTML5, CSS3, Python, Firebase",
      info: "Safari Guessing Game is a full-stack web app built with React, Flask, and Firebase Authentication, showcasing seamless integration of frontend and backend technologies. The Flask backend manages game logic, handles API requests, and uses Flask-CORS to enable cross-origin communication. The React frontend delivers a responsive UI with real-time updates, leveraging React state management for dynamic game interaction.",
      info2: "Firebase Authentication enables secure user login and progress tracking, while the frontend and backend communicate via RESTful APIs to manage game state. The app is deployed on Heroku, with the backend served by Waitress for production readiness. This project demonstrates full-stack proficiency, API integration, and secure, scalable deployment.",
      path: "https://safariguessingame-0deac2bf61b5.herokuapp.com/",
      ghpath: "https://github.com/Markel-Bradford/safariguessinggame/tree/main"
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/converter.mp4",
      mvideo: "/devportfolio/videos/convertermobile.mp4",
      projectName: "Global Currency Converter",
      tech: "React, JS, HTML5, CSS3, REST API",
      info: "Global Currency Converter is a responsive web app built with React and JavaScript, utilizing real-time exchange rates from an external API. Core functionality includes efficient data fetching, parsing, and dynamic updates via custom JS logic. Enhanced UI/UX is achieved with React-Currency-Input-Field for accurate inputs and React-Accessible-Accordion for organized, user-friendly layouts.",
      info2: "The application supports light/dark themes and adapts across screen sizes using a mix of inline and external CSS. Deployed on Render, the app runs in a secure environment, ensuring protected API usage and data integrity. This project demonstrates skills in API integration, responsive design, and secure deployment of modern React-based applications.",
      path: "https://mbconverter.onrender.com/",
      ghpath: "https://github.com/Markel-Bradford/mbconverter"
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/Weather.mp4",
      mvideo: "/devportfolio/videos/weathermobile.mp4",
      projectName: "Weather App",
      tech: "React, JS, HTML5, CSS3, REST APIs",
      info: "Weather App is a real-time weather dashboard built with React, leveraging Axios and the OpenWeatherMap & Geolocation APIs to fetch and display current conditions and weekly forecasts. Integrated React-Accessible-Accordion for clean UI organization and improved accessibility.The frontend is styled with CSS3 for a responsive, user-friendly design, while JavaScript fetch and structured query parameters handle precise API calls. Robust error handling ensures stability during API failures or network issues.",
      info2: "Deployed on Render, the app securely manages API keys, emphasizing data privacy and reliability. This project demonstrates advanced skills in API integration, asynchronous data handling, and secure deployment within a modern web application environment.",
      path: "https://mbweatherapp.onrender.com/",
      ghpath: "https://github.com/Markel-Bradford/react-weatherapp"
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/Odin.mp4",
      mvideo: "/devportfolio/videos/odinmobile.mp4",
      projectName: "The Odin Project Foundations",
      tech: "HTML5, CSS3, JS, Responsive Design",
      info: "Developed a collection of foundational projects to reinforce core web development skills using HTML5, CSS3, and vanilla JavaScript. Built a responsive Flexbox-based landing page for a fictional fitness brand and an interactive Rock-Paper-Scissors game using DOM manipulation and game logic.",
      info2: "Created an Etch-a-Sketch drawing app with dynamic tile coloring and a fully functional calculator supporting keyboard inputs and arithmetic logic. These projects solidified my understanding of DOM manipulation, Flexbox layout systems, and JavaScript event handling.",
      path: "https://markel-bradford.github.io/odinprojectfoundations/",
      ghpath: "https://github.com/Markel-Bradford/odinprojectfoundations"
    },
  ];

  function showPreview(project) {
    // Set the state to the selected product
    setselectedProject(project);
  }

  function hidePreview() {
    // Reset the state to null
    setselectedProject(null);
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: pCards, inView: pCardsInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const { ref: title, inView: titleInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="projects" className="projectsBg">
      <div className="filler2"></div>
      <h1 ref={title} className="projects">
        {" "}
        <span
          className={`${titleInView ? styles.animationFade : styles.hidden}`}>
          Projects
        </span>
      </h1>
      <div
        ref={ref}
        className={`${inView ? styles.animationFade : styles.hidden}`}></div>
      <div id="projectTitle">
        <h2 className="project-view">
          Click on a project card to view more details and find links to each project and repository
        </h2>
      </div>
      <div className="project-container">
        <div
          ref={pCards}
          className={`${styles.projectCardsContainer}
              ${pCardsInView ? styles.animationFade : styles.hidden}`}>
          {projectData.map((project, index) => (
            <div className="projectCardWrapper" key={index}>
              <ProjectItems
                project={project}
                isExpanded={expandedIndex === index}
                onExpand={() => expandCard(index)}
                onClose={closeCard}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
