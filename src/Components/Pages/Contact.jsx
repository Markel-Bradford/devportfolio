import React from "react";
import "../../App.css";
import "./Contact.css";
import styles from "../../styles/Global.module.scss";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref: title, inView: titleInView } = useInView({
    triggerOnce: true,
  });

  const { ref: subTitle, inView: subtitleInView } = useInView({
    triggerOnce: true,
  });

  const { ref: pics, inView: picsInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="contact">
      <div className="filler2"></div>
      <h1 className="contact">
        <span
          ref={title}
          className={`${titleInView ? styles.animationFade : " "}`}>
          Contact Me
        </span>
      </h1>
      <div  
            className="contactContainer">
        <h2 ref={subTitle} className={`${styles.contactMethods} ${subtitleInView ? styles.animationFade : " "}`}>
            Please feel free to connect with me via LinkedIn or e-mail!
        </h2>
      </div>
      <div className="contact-img">
        <div
          ref={pics}
          className={`${picsInView ? styles.animationFade : " "}`}>
          <div className="contact-wrapper">
            <a
              className="contact-links"
              href="mailto:markel.bradford94@gmail.com">
              <img
                className="icon"
                src="/devportfolio/images/contact2.png"
                alt="Email me"
              />
            </a>
            <a
              className="contact-links"
              href="https://www.linkedin.com/in/markel-bradford-1773a9236">
              <img
                className="icon"
                src="/devportfolio/images/contact1.png"
                alt="My LinkedIn Profile"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
