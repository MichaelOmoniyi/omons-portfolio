import React from "react";
import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <h2 className="header">Skills</h2>
      <div className={styles.skillsIcons}>
        <FontAwesomeIcon icon={faPython} className={styles.icons} />
        {/* <FontAwesomeIcon icon={faFlask} className={styles.icons} /> */}
        {/* <FontAwesomeIcon icon={faJS} className={styles.icons} /> */}
        <FontAwesomeIcon icon={faHtml5} className={styles.icons} />
        <FontAwesomeIcon icon={faCss3} className={styles.icons} />
        <FontAwesomeIcon icon={faGit} className={styles.icons} />
        <FontAwesomeIcon icon={faGithub} className={styles.icons} />
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Languages</h3> <FontAwesomeIcon icon={faArrowDown} />
          </span>
          <div className={styles.skillList}>
            <ul>
              <li>Python</li>
              <li>C</li>
              <li>SQl</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Frameworks</h3> <FontAwesomeIcon icon={faArrowDown} />
          </span>
          <div className={styles.skillList}>
            <ul>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>Flask</li>
              <li>BootStrap</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Tools</h3> <FontAwesomeIcon icon={faArrowDown} />
          </span>
          <div className={styles.skillList}>
            <ul>
              <li>Linux</li>
              <li>Vim</li>
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>PyCharm</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Soft Skills</h3> <FontAwesomeIcon icon={faArrowDown} />
          </span>
          <div className={styles.skillList}>
            <ul>
              <li>Communication</li>
              <li>Team work</li>
              <li>Problem Solving</li>
              <li>Project Management</li>
              <li>Versatility</li>
              <li>Creativity</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
