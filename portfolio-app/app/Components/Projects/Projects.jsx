"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projects from "./projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const refs = useRef([]);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prevState) => {
              const newState = {
                ...prevState,
                [entry.target.id]: true,
              };
              return newState
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref, index) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="container" id="projects">
      <div>
        <h2 className="header sr-only">Projects</h2>
        <div
          className={`${styles.gallery} grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8`}
        >
          {projects.map((project, index) => {
            return (
              <div
                key={project["id"]}
                ref={(el) => (refs.current[index] = el)}
                id={`project-${project["id"]}`}
                className={`${styles.group} ${
                  isVisible[`project-${project["id"]}`] ? styles.fadeIn : ""
                } group rounded-lg`}
              >
                <div
                  className={`${styles.projectView} aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg xl:aspect-h-8 xl:aspect-w-7`}
                >
                  <img
                    src={project["image"]}
                    alt={project["imageAlt"]}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className={`${styles.projectLinksHover}`}>
                    <a href={project["github"]} target="_blank">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={styles.icons}
                      />
                    </a>
                    <a href={project["liveSite"]} target="_blank">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className={styles.icons}
                      />
                    </a>
                  </div>
                </div>
                <div className={styles.details}>
                  <div className={styles.projectDescription}>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {project["title"]}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {project["description"]}
                    </p>
                  </div>
                  <div className={styles.projectLinks}>
                    <a href={project["github"]} target="_blank">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={styles.icons}
                      />
                    </a>
                    <a href={project["liveSite"]} target="_blank">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className={styles.icons}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
