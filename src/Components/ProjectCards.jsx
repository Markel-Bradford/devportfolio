import React, { useState } from "react";
import "../App.css";
import "./Pages/Projects.css";
import styles from "../styles/Global.module.scss";
import { useInView } from "react-intersection-observer";
import ProjectItems from "./ProjectItems";

function ProjectCards() {
  const [selectedProject, setselectedProject] = useState(null);
  const projectData = [
    // Array of card data with additional product details if necessary
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/budgetpc.mp4",
      mvideo: "/devportfolio/videos/pthreadsmobile.mp4",
      projectName: "myFinance Budgeting App",
      description: "MongoDB, Express, React, Node (MERN stack)",
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/budgetpc.mp4",
      mvideo: "/devportfolio/videos/pthreadsmobile.mp4",
      projectName: "myFinance Budgeting App",
      description: "MongoDB, Express, React, Node (MERN stack)",
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/budgetpc.mp4",
      mvideo: "/devportfolio/videos/pthreadsmobile.mp4",
      projectName: "myFinance Budgeting App",
      description: "MongoDB, Express, React, Node (MERN stack)",
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/budgetpc.mp4",
      mvideo: "/devportfolio/videos/pthreadsmobile.mp4",
      projectName: "myFinance Budgeting App",
      description: "MongoDB, Express, React, Node (MERN stack)",
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/budgetpc.mp4",
      mvideo: "/devportfolio/videos/pthreadsmobile.mp4",
      projectName: "myFinance Budgeting App",
      description: "MongoDB, Express, React, Node (MERN stack)",
    },
    {
      src: "/devportfolio/images/github.png",
      src2: "/devportfolio/images/whitegithub.png",
      video: "/devportfolio/videos/budgetpc.mp4",
      mvideo: "/devportfolio/videos/pthreadsmobile.mp4",
      projectName: "myFinance Budgeting App",
      description: "MongoDB, Express, React, Node (MERN stack)",
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
          Please browse and review the projects I've completed
        </h2>
      </div>
      <div className="project-container">
          <div ref={pCards}
            className={`${styles.projectCardsContainer}
              ${pCardsInView ? styles.animationFade : styles.hidden}`
            }>
              {projectData.map((project, index) => (  
            <div className="projectCard" key={index}>
                <ProjectItems
                  project={project.projectName}
                  description={project.description}
                  src={project.src}
                  src2={project.src2}
                  video={project.video}
                  onClick={showPreview}
                />
            </div>
              ))}
        </div>
        {selectedProject && (
          <ProductPreviewPopup
            product={selectedProject}
            onClose={hidePreview}
          />
        )}
      </div>
    </div>
  )
}
    export default ProjectCards;