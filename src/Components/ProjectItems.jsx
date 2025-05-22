import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Global.module.scss";

function ProjectItems({ project, isExpanded, onExpand, onClose }) {
  return (
    <div
      className={`projectCard ${isExpanded ? "expanded" : ""}`}
      onClick={!isExpanded ? onExpand : undefined}>
      <div
        className={` ${
          !isExpanded ? "project-basic" : "project-basic-hidden"
        }`}>
        <div className="project-name-container">
          <h3 className="text-links">{project.projectName}</h3>
          <span className="tech">{project.description}</span>
        </div>
        <div className="githubContainer">
          <img src={project.src} alt="GitHub" className="github" />
          <img src={project.src2} alt="GitHub Dark" className="github2" />
        </div>
        <div className="thumbnail-wrapper">
          <video
            className="thumbnail"
            src={project.video}
            loop
            autoPlay
            muted
            playsInline
          />
                      <video
              className="thumbnail-mobile"
              src={project.mvideo}
              loop
              autoPlay
              muted
              playsInline
            />
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="project-expanded-content">
          <div className="project-links-container">
          <h3 className="projectName">
            <a className="text-links" href={project.path} target="_blank" referrerPolicy="no-referrer">
              {project.projectName}
              <br />
              <span className="texh">{project.tech}</span>
            </a>
          </h3>
          <div className="githubContainer">
            <a href={project.ghpath} target="_blank" referrerPolicy="no-referrer"><img src={project.src} alt="GitHub" className="github" />
            <img src={project.src2} alt="GitHub Dark" className="github2" /></a>
          </div>
          </div>
          <div className="thumbnail-wrapper">
            <video
              className="thumbnail"
              src={project.video}
              loop
              autoPlay
              muted
              playsInline
            />
            <video
              className="thumbnail-mobile"
              src={project.mvideo}
              loop
              autoPlay
              muted
              playsInline
            />
          </div>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
          <div className="information">
            {project.info}
            <br />
            <br />
            {project.info2}
          </div>
          {/* Additional info can go here */}
        </div>
      )}
    </div>
  );
}

export default ProjectItems;
