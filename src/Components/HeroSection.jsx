import React from "react";
import  "../App.css"
import './HeroSection.css'
import styles from '../styles/Global.module.scss'
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const { ref, inView} = useInView({
    triggerOnce: true
  });
  const { ref:name, inView: nameInView} = useInView({
    triggerOnce: true
  });

  return (
    <div className="heroContainer" >
      <video
        src="/devportfolio/videos/HeroBg.mp4"
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
      />
      <h1 id="welcome" ref={ref} className={`${styles.welcome} ${inView ? styles.animationFade : styles.hidden}`}>
        Welcome to My Portfolio
      </h1>
      <h2 ref={name} className={`${styles.myName} ${nameInView ? styles.animationFade : styles.hidden}`}>
        Markel Bradford
        </h2>
    </div>
  );
}

export default HeroSection;
