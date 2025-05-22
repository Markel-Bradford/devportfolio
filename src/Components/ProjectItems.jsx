import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import styles from "../styles/Global.module.scss";

function ProjectItems(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <>
        <li ref={ref} className={`${inView ? styles.fadeIn : styles.hidden}`}>
            <Link to={props.path}>
            <div className='project-name-container'>
                <h3 className='text-links'>{props.project}<br />
                    <span className='tech'>{props.description}</span>
                </h3>
            </div>
            <div className='githubContainer'>
            <img src={props.src} alt='Github Icon (light)' className="github"/>
            <img src={props.src2} alt='Github Icon (dark)' className="github2"/>
            </div>
            <div className="thumbnail-wrapper">
               <video className="thumbnail"
               src={props.video}
               loop
               autoPlay
               muted
               playsInline></video>
            </div>
            </Link>
        </li>
    </>
  );
}

export default ProjectItems;
