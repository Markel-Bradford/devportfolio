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
            <img
              className="profile_picture"
              src="/devportfolio/images/me.JPG"
              alt="Markel Bradford"
            />
            <img
              className="comptia"
              src="/devportfolio/images/comptia-security-ce-certification.png"
              alt="CompTIA Security+ Certification Badge"
            />
          </div>

          <div className="postcard-content">
            <h2 className="name">Markel Bradford</h2>
            <h3 className="titles">
              Cybersecurity | Full-Stack Developer | Master&apos;s Student
            </h3>

            <p className="me-text">
              Passionate about innovation and problem-solving, I am
              transitioning from a successful management career into
              cybersecurity and full-stack development. Backed by my CompTIA
              Security+ certification, I excel at the intersection of strategy,
              technical execution, and creative problem-solving. I&apos;m committed
              to continuous learning and leveraging modern technologies to build
              secure, scalable, and innovative solutions.
            </p>

            <ul className="highlights">
              <li>💻 Proficient in React, Next.js, Python, Express, MongoDB</li>
              <li>🎓 B.S. in Information Technology - GPA 4.0</li>
              <li>🚀 Cybersecurity Analyst and Software Developer</li>
              <li>🪪CompTIA Security+ Certified - 2025</li>
            </ul>

            <blockquote className="fun-quote">
              “Technology is best when it brings people together.” - Matt
              Mullenweg
            </blockquote>

            <div className="postcard-links">
              <a
                href="https://github.com/Markel-Bradford"
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/markelbradford/"
                target="_blank"
                rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:markel.bradford94@gmail.com">Email Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
