"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projects from "./projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faStar,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const refs = useRef([]);
  const [isVisible, setIsVisible] = useState({});
  const [activeProjectLinks, setActiveProjectLinks] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prevState) => ({
              ...prevState,
              [entry.target.id]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const renderProjectLinks = (project) => {
    return (
      <div className={styles.projectLinksHover}>
        <div className={styles.companyLinks}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              <FontAwesomeIcon icon={faGithub} className={styles.icons} />
              <span>GitHub</span>
            </a>
          )}
          {project.liveSite && (
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              <FontAwesomeIcon icon={faGlobe} className={styles.icons} />
              <span>Website</span>
            </a>
          )}
        </div>
        {project.projects && (
          <div className={styles.multipleLinks}>
            <h4>Projects</h4>
            {project.projects.map((p, i) => (
              <a
                key={i}
                href={p.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <FontAwesomeIcon
                  icon={faExternalLink}
                  className={styles.icons}
                />
                <span>{p.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderBottomLinks = (project) => {
    return (
      <div className={styles.projectLinks}>
        <div className={styles.companyLinksBottom}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.icons} />
            </a>
          )}
          {project.liveSite && (
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGlobe} className={styles.icons} />
            </a>
          )}
        </div>
        {project.projects && (
          <>
            <button
              className={styles.viewProjectsBtn}
              onClick={() =>
                setActiveProjectLinks(
                  project.id === activeProjectLinks ? null : project.id
                )
              }
            >
              <FontAwesomeIcon icon={faExternalLink} className={styles.icons} />
              <span>View Projects</span>
            </button>
            {activeProjectLinks === project.id && (
              <div className={styles.projectsDropdown}>
                {project.projects.map((p, i) => (
                  <a
                    key={i}
                    href={p.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.dropdownLink}
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container" id="projects">
      <div>
        <h2 className="header">Featured Projects</h2>
        <div className={styles.gallery}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (refs.current[index] = el)}
              id={`project-${project.id}`}
              className={`${styles.group} ${
                isVisible[`project-${project.id}`] ? styles.fadeIn : ""
              }`}
            >
              <div className={styles.projectView}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                {renderProjectLinks(project)}
              </div>
              <div className={styles.details}>
                <div className={styles.projectDescription}>
                  <div className={styles.titleRow}>
                    <h3>{project.title}</h3>
                    <span className={styles.role}>{project.role}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.keyFeatures}>
                    {project.keyFeatures.map((feature, i) => (
                      <div key={i} className={styles.featureItem}>
                        <FontAwesomeIcon
                          icon={faStar}
                          className={styles.featureIcon}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {renderBottomLinks(project)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
