"use client";
import React, { useState } from "react";
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
  faAws,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCaretDown,
  faDatabase,
  faServer,
  faCog,
  faUsers,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import TailwindIcon from "./TailwindIcon";

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: faReact,
    skills: [
      { name: "React.js", icon: faReact, experience: "Primary Framework" },
      { name: "Next.js", experience: "Production Experience" },
      { name: "Vue.js", icon: faVuejs, experience: "Project Experience" },
      { name: "JavaScript", icon: faJs, experience: "Core Technology" },
      { name: "TypeScript", experience: "Daily Use" },
      { name: "HTML5", icon: faHtml5, experience: "Core Technology" },
      { name: "CSS3", icon: faCss3, experience: "Core Technology" },
      {
        name: "Tailwind CSS",
        customIcon: TailwindIcon,
        experience: "Primary Styling",
      },
      {
        name: "Bootstrap",
        icon: faBootstrap,
        experience: "Project Experience",
      },
      { name: "Github", icon: faGithub, experience: "Version Control" },
      { name: "Npm", icon: faNpm, experience: "Package Management" },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: faServer,
    skills: [
      { name: "Node.js", icon: faNode, experience: "Primary Runtime" },
      { name: "Express.js", experience: "API Development" },
      { name: "Python", icon: faPython, experience: "Server-side Development" },
      { name: "Flask", experience: "API Development" },
      { name: "SQL", icon: faDatabase, experience: "Data Management" },
      { name: "MongoDB", experience: "NoSQL Database" },
      { name: "Github", icon: faGithub, experience: "Version Control" },
      { name: "Npm", icon: faNpm, experience: "Package Management" },
    ],
  },
  devops: {
    title: "DevOps & Tools",
    icon: faCog,
    skills: [
      { name: "Git", icon: faGit, experience: "Version Control" },
      { name: "Docker", icon: faDocker, experience: "Containerization" },
      { name: "AWS", icon: faAws, experience: "Cloud Services" },
      { name: "CI/CD", experience: "Automation" },
      { name: "Linux", experience: "System Administration" },
      { name: "Github", icon: faGithub, experience: "Version Control" },
      { name: "Npm", icon: faNpm, experience: "Package Management" },
    ],
  },
  tools: {
    title: "Development Tools",
    icon: faCog,
    skills: [
      { name: "Git", icon: faGit, experience: "Version Control" },
      { name: "GitHub", icon: faGithub, experience: "Collaboration" },
      { name: "VS Code", experience: "Primary IDE" },
      { name: "PyCharm", experience: "Python Development" },
      { name: "Linux", experience: "System Administration" },
      { name: "Vim", experience: "Text Editing" },
      { name: "Figma", experience: "UI Design" },
      { name: "Docker", icon: faDocker, experience: "Containerization" },
      { name: "CI/CD", experience: "Automation" },
    ],
  },
  soft: {
    title: "Professional Skills",
    icon: faUsers,
    skills: [
      { name: "Communication", experience: "Cross-functional Teams" },
      { name: "Team Work", experience: "Collaborative Development" },
      { name: "Problem Solving", experience: "Technical Solutions" },
      { name: "Project Management", experience: "Agile/Scrum" },
      { name: "Leadership", experience: "Team Lead Experience" },
      { name: "Versatility", experience: "Adaptable Learning" },
      { name: "Creativity", experience: "Innovative Solutions" },
    ],
  },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="container" id="skills">
      <h2 className="header">Technical Expertise</h2>

      <div className={styles.categoryTabs}>
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            className={`${styles.categoryTab} ${
              activeCategory === key ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(key)}
          >
            <FontAwesomeIcon icon={category.icon} />
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.skillsGrid}>
        {skillCategories[activeCategory].skills.map((skill, index) => (
          <div
            key={index}
            className={styles.skillCard}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={styles.skillInfo}>
              <div className={styles.skillHeader}>
                {skill.icon && (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className={styles.skillIcon}
                  />
                )}
                {skill.customIcon && (
                  <skill.customIcon
                    className={`${styles.skillIcon} !w-8 h-auto`}
                  />
                )}
                <h3>{skill.name}</h3>
              </div>
              {/* <div className={styles.skillExperience}>
                <span>{skill.experience}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.certifications}>
        <h3>Certifications & Achievements</h3>
        <div className={styles.certList}>
          {/* Add your certifications here */}
          <div className={styles.certCard}>
            <h4>ALX Certified Software Engineer</h4>
            <p>ALX</p>
          </div>
          <div className={styles.certCard}>
            <h4>Try Kibo Web Foundation Program</h4>
            <p>KIBO</p>
          </div>
          <div className={styles.certCard}>
            <h4>Matlab Onramp</h4>
            <p>Mathworks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
