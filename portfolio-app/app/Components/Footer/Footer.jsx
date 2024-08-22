import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#sayhi">Say Hi</a>
        <a href="https://drive.google.com/file/d/1fGVoHtV5OPfh0kZ17vINp_XDYuiEr1lO/uc?export=download">Download Resume</a>
      </div>
      <div className={styles.copyright}>Copyright. Micheal Omoniyi 2024</div>
    </div>
  );
}

export default Footer