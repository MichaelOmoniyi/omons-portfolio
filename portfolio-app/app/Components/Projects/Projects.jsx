"use client";
import React from "react";
import styles from "./Projects.module.css";
import projects from "./projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="container">
      <div>
        <h2 className="header sr-only">Projects</h2>

        <div
          className={`${styles.gallery} grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8`}
        >
          {projects.map((project) => {
            return (
              <div
                key={project["id"]}
                className={`${styles.group} group rounded-lg`}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={project["image"]}
                    alt={project["imageAlt"]}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className={styles.projectDescription}>
                  <h3 className="mt-4 text-sm text-gray-700">
                    {project["title"]}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {project["description"]}
                  </p>
                </div>
                <div className={styles.projectLinks}>
                  <a href={project["github"]}>
                    <FontAwesomeIcon icon={faGithub} className={styles.icons} />
                  </a>
                  <a href={project["liveSite"]}>
                    <FontAwesomeIcon icon={faGlobe} className={styles.icons} />
                  </a>
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
