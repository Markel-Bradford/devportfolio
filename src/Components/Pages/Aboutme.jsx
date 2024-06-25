import React from "react";
import "../../App.css";
import "./Aboutme.css";
import styles from '../../styles/Global.module.scss'
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const { ref, inView} = useInView({
    triggerOnce: true
  });
  const { ref:title, inView: titleInView} = useInView({
    triggerOnce: true,
  });
  const { ref: section1, inView: section1InView} = useInView({
    triggerOnce: true,
  });
  const { ref: section2, inView: section2InView} = useInView({
    triggerOnce: true
  });
  const { ref: section3, inView: section3InView} = useInView({
    triggerOnce: true
  });
  const { ref: section4, inView: section4InView} = useInView({
    triggerOnce: true
  });
  const { ref: skills, inView: skillsInView} = useInView({
    triggerOnce: true
  });
  const { ref: certs, inView: certsInView} = useInView({
    triggerOnce: true
  });
  const { ref: cert1, inView: cert1InView} = useInView({
    triggerOnce: true
  });
  const { ref: cert2, inView: cert2InView} = useInView({
    triggerOnce: true
  });
  
  return (
    <div
    id="aboutme">
      <div className="filler2"></div>
      <h1 className="about-me"><span ref={title} className={`${titleInView ? styles.animationFade : styles.hidden}`}>About Me</span></h1>
      <div className="about-container">
        <div className="about-me-container">
          <div ref={ref} className={`${inView ? styles.animationFade : styles.hidden}`}>
          <h4 className="hello">Hello! My name is</h4>
          <h2 className="name">Markel Bradford</h2>
          <h3 className="titles">
            Site Operations Manager | Student | Front-end Developer
          </h3>
          </div>
          <div className="filler"></div>
        </div>
        <div className="about-me-container">
          <div ref={section1} className={`${styles.me} ${section1InView ? styles.animationFade : styles.hidden}`}>
            <p>
              Driven by a passion for innovation and a keen eye for detail, I am
              a results-oriented professional based in Huntsville, Alabama,
              poised to transition seamlessly from a successful management
              career to the dynamic realm of front-end development. I thrive on
              challenges, finding common ground between the strategic demands of
              management and the creative problem-solving inherent in
              development. Currently proficient in languages such as
              HTML5, CSS, JavaScript, ReactJS, and Python, I am committed to continual
              growth, driven by a combination of rigorous research and hands-on
              application.
            </p>
            </div>
            <div ref={section2} className={`${styles.me} ${section2InView ? styles.animationFade : styles.hidden}`}>
            <p>
              As a dedicated full-time student at American Military University,
              pursuing a Bachelor of Science in Information Technology with a
              specialization in Multitier Architecture, I am on track to
              graduate in 2025. My academic journey reflects a steadfast
              commitment to self-improvement and the pursuit of new
              opportunities. Over the past two years, I have dedicated myself to
              mastering programming and development principles, positioning
              myself for a successful transition into the field.
            </p>
            </div>
            <div ref={section3} className={`${styles.me} ${section3InView ? styles.animationFade : styles.hidden}`}>
            <p>
              In my professional capacity, I serve as a Site Operations Manager
              at Stratosphere Quality, a leading third-party quality assurance
              company, while concurrently holding a freelance front-end web developer
              position at Kaiju's Grub LLC. With a history of leadership roles
              dating back to my teenage years, I bring a wealth of experience
              and a proactive approach to every challenge. Now, I eagerly seek
              internships and entry-level opportunities that will allow me to
              apply and expand upon my skills, contributing meaningfully to
              innovative projects and driving my career forward.
            </p>
          </div>
        </div>
        <div className="filler"></div>
        <div className="about-me-container">
          <div ref={section4} className={`${section4InView ? styles.animationFade : styles.hidden}`}>
          <h3 className="title-skills">Skills</h3>
        <div ref={skills} className={`${styles.skillContainer} ${skillsInView ? styles.animationFade : styles.hidden}`}>
          <img
            className="skill"
            src="/devportfolio/images/trifecta.png"
            alt="HTML CSS and JS Logo"
          />
          
          <img
            className="skill-2"
            src="/devportfolio/logo512.png"
            alt="react logo"
          />
          <img
            className="py-skill"
            src="/devportfolio/images/python.png"
            alt="python logo"
          />
          <img
            className="py-skill"
            src="/devportfolio/images/firebase.png"
            alt="firebase logo"
          />
          <img
            className="skill-1"
            src="/devportfolio/images/VScode.png"
            alt="VSCode logo"
          />
        </div>
        </div>
        <div ref={certs} className={`${certsInView ? styles.animationFade : styles.hidden}`}>
          
          <h3 className="title-certs">Certifications</h3>
          <div ref={cert1} className={`${cert1InView ? styles.animationFade : styles.hidden}`}>
          <h2 className="certification">
            Responsive Web Design from freeCodeCamp.org
          </h2>
          <img
            className="cert-thumbnail"
            src="/devportfolio/images/Responsive-webdesign-certificate.JPG"
            alt=""
          />
          <a
            className="verify-link"
            href="https://www.freecodecamp.org/certification/fccdd4ff3b8-df57-446b-9638-9d11fd683d67/responsive-web-design"
            alt=""
            target="_blank"
            rel="noreferrer">
            <h3 className="verify">Verify my certificate here</h3>
          </a>
          </div>
          <div ref={cert2} className={`${cert2InView ? styles.animationFade : styles.hidden}`}>
          <h2 className="certification">
            Introduction to Python Programming for Web Development from
            Dataquest.io
          </h2>
          <img
            className="cert-thumbnail"
            src="/devportfolio/images/dataquest-cert.JPG"
            alt=""
          />
          <a
            className="verify-link"
            href="https://app.dataquest.io/verify_cert/KRKIZCFI6ZB6ECEUC6R2/"
            alt="link to verify certification"
            target="_blank"
            rel="noreferrer">
            <h3 className="verify">Verify my certificate here</h3>
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
