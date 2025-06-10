import React from "react";
import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faPython,
  faJs,
  faReact,
  faVuejs,
  faNode,
  faNpm,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <h2 className="header">Skills</h2>
      <div className={styles.skillsIcons}>
        <FontAwesomeIcon
          icon={faPython}
          className={styles.icons}
          title="Python"
        />
        <FontAwesomeIcon
          icon={faJs}
          className={styles.icons}
          title="JavaScript"
        />
        <FontAwesomeIcon
          icon={faHtml5}
          className={styles.icons}
          title="HTML5"
        />
        <FontAwesomeIcon icon={faCss3} className={styles.icons} title="CSS3" />
        <FontAwesomeIcon
          icon={faReact}
          className={styles.icons}
          title="React"
        />
        <FontAwesomeIcon
          icon={faVuejs}
          className={styles.icons}
          title="Vue.js"
        />
        <FontAwesomeIcon
          icon={faNode}
          className={styles.icons}
          title="Node.js"
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          className={styles.icons}
          title="Bootstrap"
        />
        <FontAwesomeIcon icon={faGit} className={styles.icons} title="Git" />
        <FontAwesomeIcon
          icon={faGithub}
          className={styles.icons}
          title="GitHub"
        />
        <FontAwesomeIcon icon={faNpm} className={styles.icons} title="NPM" />
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Languages</h3>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          <div className={styles.skillList}>
            <ul>
              <li>Python</li>
              <li>C</li>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Frameworks</h3>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          <div className={styles.skillList}>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Flask</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Tools</h3>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          <div className={styles.skillList}>
            <ul>
              <li>Linux</li>
              <li>Vim</li>
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>NPM</li>
              <li>PyCharm</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className={styles.skill}>
          <span className={styles.skillHeader}>
            <h3>Soft Skills</h3>
            <FontAwesomeIcon icon={faCaretDown} />
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
