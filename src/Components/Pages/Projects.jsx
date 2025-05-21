import React from "react";
import "../../App.css";
import "./Projects.css";
import styles from "../../styles/Global.module.scss";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { ref: title, inView: titleInView } = useInView({
    triggerOnce: true,
  });

  const { ref: project1, inView: project1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName1, inView: projectName1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo1, inView: projectInfo1InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project2, inView: project2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName2, inView: projectName2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo2, inView: projectInfo2InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project3, inView: project3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName3, inView: projectName3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo3, inView: projectInfo3InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project4, inView: project4InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName4, inView: projectName4InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo4, inView: projectInfo4InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project5, inView: project5InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName5, inView: projectName5InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo5, inView: projectInfo5InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project6, inView: project6InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName6, inView: projectName6InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo6, inView: projectInfo6InView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="projects" className="projectsBg">
      <div className="filler2"></div>
      <h1 ref={title} className="projects">
        {" "}
        <span
          className={`${titleInView ? styles.animationFade : styles.hidden}`}
        >
          Projects
        </span>
      </h1>
              <div
          className={`${inView ? styles.animationFade : styles.hidden}`}
        ></div>
      <div id="projectTitle">
        <h2 className="project-view">
          Please browse and review the projects I've completed
        </h2>
      </div>
      <div ref={ref} className="project-container">
        <div>
        <div
          ref={projectName2}
          className={`${
            projectName2InView ? styles.animationFade : styles.hidden
          }`}
        >
          <div className="project-name-container">
            <a
              className="text-links"
              href="https://markel-bradford.github.io/BudgetApp"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="project-name">
                myFinance Budgeting App:
                <br />
                <span className="tech">
                  MongoDB, Express, React, Node (MERN stack)
                </span>
              </h3>
            </a>
            <a
              href="https://github.com/Markel-Bradford/BudgetApp"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="/devportfolio/images/github.png"
                alt="link to Github repository"
              />
              <img
                className="github2"
                src="/devportfolio/images/whitegithub.png"
                alt="link to Github repository"
              />
            </a>
          </div>
          <div
            ref={project2}
            className={`${
              project2InView ? styles.animationFade : styles.hidden
            }`}
          >
            <div className="thumbnail-wrapper">
              <a
                className="text-links"
                href="https://markel-bradford.github.io/BudgetApp/"
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className="thumbnail"
                  src="/devportfolio/videos/budgetpc.mp4"
                  alt="Final project for WEBD121 class"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
                <video
                  className="thumbnail-mobile"
                  src="/devportfolio/videos/budgetmobile.mov"
                  alt="final project mobile thumbnail"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
              </a>
            </div>
          </div>
        </div>
        </div>

        <div>
        <div
          ref={projectName3}
          className={`${
            projectName3InView ? styles.animationFade : styles.hidden
          }`}
        >
          <div className="project-name-container">
            <a
              className="text-links"
              href="https://nextproducttemplate.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="project-name">
                E-Commerce Template:
                <br />{" "}
                <span className="tech">
                  {" "}
                  NextJS, React, TypeScript, TailwindCSS
                </span>
              </h3>
            </a>
            <a
              href="https://github.com/Markel-Bradford/nextproducttemplate"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="/devportfolio/images/github.png"
                alt="link to Github repository"
              />
              <img
                className="github2"
                src="/devportfolio/images/whitegithub.png"
                alt="link to Github repository"
              />
            </a>
          </div>
        </div>
        <div
          ref={project3}
          className={`${project3InView ? styles.animationFade : styles.hidden}`}
        >
          <div className="thumbnail-wrapper">
            <a
              className="text-links"
              href="https://nextproducttemplate.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <video
                className="thumbnail"
                src="/devportfolio/videos/Pthread.mp4"
                alt="NextJS E-commerce template"
                muted
                playsInline
                autoPlay
                loop
              />
              <video
                className="thumbnail-mobile"
                src="/devportfolio/videos/pthreadsmobile.mp4"
                alt="NextJS E-commerce template mobile"
                muted
                playsInline
                autoPlay
                loop
              />
            </a>
          </div>
        </div>
        </div>
        <div>
        <div
          ref={projectName4}
          className={`${
            projectName4InView ? styles.animationFade : styles.hidden
          }`}
        >
          <div className="project-name-container">
            <a
              className="text-links"
              href="https://safariguessingame-0deac2bf61b5.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="project-name">
                {" "}
                Guessing Game:{" "}
                <span className="tech">
                  {" "}
                  <br />
                  React, JavaScript, HTML5, CSS3, Python,
                  Firebase Authentication
                </span>
              </h3>
            </a>
            <a
              href="https://github.com/Markel-Bradford/safariguessinggame/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="/devportfolio/images/github.png"
                alt="link to Github repository"
              />
              <img
                className="github2"
                src="/devportfolio/images/whitegithub.png"
                alt="link to Github repository"
              />
            </a>
          </div>
        </div>
        <div
          ref={project4}
          className={`${project4InView ? styles.animationFade : styles.hidden}`}
        >
          <div className="thumbnail-wrapper">
            <a
              href="https://safariguessingame-0deac2bf61b5.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <video
                className="thumbnail"
                src="/devportfolio/videos/Safarigame.mp4"
                alt="guessing game thumbnail"
                muted
                playsInline
                autoPlay
                loop
              />
              <video
                className="thumbnail-mobile"
                src="/devportfolio/videos/safarimobile.mp4"
                alt="guessing game mobile thumbnail"
                muted
                playsInline
                autoPlay
                loop
              />
            </a>
          </div>
        </div>
        </div>
        <div>
        <div
          ref={projectName6}
          className={`${
            projectName6InView ? styles.animationFade : styles.hidden
          }`}
        >
          <div className="project-name-container">
            <a
              className="text-links"
              href="https://mbconverter.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="project-name">
                Global Currency Converter:
                <br />{" "}
                <span className="tech">
                  {" "}
                  React, JavaScript, HTML5, CSS3, REST API
                </span>
              </h3>
            </a>
            <a
              href="https://github.com/Markel-Bradford/mbconverter"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="/devportfolio/images/github.png"
                alt="link to Github repository"
              />
              <img
                className="github2"
                src="/devportfolio/images/whitegithub.png"
                alt="link to Github repository"
              />
            </a>
          </div>
        </div>
        <div
          ref={project6}
          className={`${project6InView ? styles.animationFade : styles.hidden}`}
        >
          <div className="thumbnail-wrapper">
            <a
              href="https://mbconverter.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <video
                id="portfolio-thumbnail"
                className="thumbnail"
                src="/devportfolio/videos/converter.mp4"
                alt="curency convertor thumbnail"
                muted
                playsInline
                autoPlay
                loop
              />
              <video
                className="thumbnail-mobile"
                id="mobile-portfolio"
                src="/devportfolio/videos/convertermobile.mp4"
                alt="curency convertor mobile thumbnail"
                muted
                playsInline
                autoPlay
                loop
              />
            </a>
          </div>
        </div>
        </div>

        <div ref={projectName1}>
          <div
            className={`${
              projectName1InView ? styles.animationFade : styles.hidden
            }`}
          >
            <div className="project-name-container">
              <a
                className="text-links"
                href="https://mbweatherapp.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">
                  React Weather App:
                  <br />{" "}
                  <span className="tech">
                    React, Java Script, HTML5, CSS3, REST APIs
                  </span>
                </h3>
                {/*<h3 className="grade">Grade: A</h3>*/}
              </a>
              <a
                href="https://github.com/Markel-Bradford/react-weatherapp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github"
                  src="/devportfolio/images/github.png"
                  alt="link to Github repository"
                />
                <img
                  className="github2"
                  src="/devportfolio/images/whitegithub.png"
                  alt="link to Github repository"
                />
              </a>
            </div>
          </div>
          <div
            ref={project1}
            className={`${
              project1InView ? styles.animationFade : styles.hidden
            }`}
          >
            <div className="thumbnail-wrapper">
              <a
                className="text-links"
                href="https://mbweatherapp.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className="thumbnail"
                  src="/devportfolio/videos/Weather.mp4"
                  alt="Weather app create using react, weather, and geo apis"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
                <video
                  className="thumbnail-mobile"
                  src="/devportfolio/videos/weathermobile.mp4"
                  alt="weather app mobile thumbnail"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div
            ref={projectName5}
            className={`${
              projectName5InView ? styles.animationFade : styles.hidden
            }`}
          >
            <div className="project-name-container">
              <a
                className="text-links"
                href="https://markel-bradford.github.io/odinprojectfoundations/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="project-name">
                  The Odin Project:
                  <br />{" "}
                  <span className="tech">
                    HTML, CSS, JavaScript, Responsive Design
                  </span>
                </h3>
              </a>
              <a
                href="https://github.com/Markel-Bradford/odinprojectfoundations"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github"
                  src="/devportfolio/images/github.png"
                  alt="link to Github repository"
                />
                <img
                  className="github2"
                  src="/devportfolio/images/whitegithub.png"
                  alt="link to Github repository"
                />
              </a>
            </div>
          </div>
          <div
            ref={project5}
            className={`${
              project5InView ? styles.animationFade : styles.hidden
            }`}
          >
            <div className="thumbnail-wrapper">
              <a
                href="https://markel-bradford.github.io/odinprojectfoundations/"
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className="thumbnail"
                  src="/devportfolio/videos/Odin.mp4"
                  alt="Homepage for my Odin Project Foundations collection"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
                <video
                  className="thumbnail-mobile"
                  src="/devportfolio/videos/odinmobile.mp4"
                  alt="odin project mobile thumbnail"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Projects;
