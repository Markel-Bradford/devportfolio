import React from "react";
import "../../App.css";
import "./Aboutme.css";
import styles from "../../styles/Global.module.scss";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div id="aboutme" className="about-me-section">
      <div className="filler2"></div>
      <h1 className="about-me">About Me</h1>

      <div className="about-container">
      <div ref={ref} className={`postcard ${inView ? "fade-in" : "hidden"}`}>
        <div className="postcard-image">
          <img src="/devportfolio/images/me.JPG" alt="Markel Bradford" />
        </div>

        <div className="postcard-content">
          <h2 className="name">Markel Bradford</h2>
          <h3 className="titles">Site Operations Manager | Student | Full-stack Developer</h3>
          
          <p className="me-text">
            Passionate about innovation and problem-solving, I&apos;m transitioning from a 
            successful management career into full-stack development. I thrive at the 
            intersection of strategy and creativity, continuously learning new 
            technologies to build innovative solutions.
          </p>

          <ul className="highlights">
            <li>💻 Proficient in React, Next.js, Python, Express, MongoDB</li>
            <li>🎓 B.S. in Information Technology (Graduating 2025)</li>
            <li>🚀 Freelance Developer & Web Design Intern</li>
          </ul>

          <blockquote className="fun-quote">
            “Technology is best when it brings people together.” - Matt Mullenweg
          </blockquote>

          <div className="postcard-links">
            <a href="https://github.com/Markel-Bradford" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/markelbradford/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:markel.bradford94@gmail.com">Email Me</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutMe;
