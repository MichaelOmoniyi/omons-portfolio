"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./LandingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const landingTextRef = useRef(null);
  const [isLandingTextVisible, setisLandingTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === landingTextRef.current) {
              setisLandingTextVisible(true);
              observer.unobserve(landingTextRef.current);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (landingTextRef.current) {
      observer.observe(landingTextRef.current);
    }

    return () => {
      if (landingTextRef.current) {
        observer.unobserve(landingTextRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.gridPattern}></div>
      <div
        ref={landingTextRef}
        className={`${styles.landingPageContent} ${
          isLandingTextVisible ? styles.fadeIn : ""
        }`}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.greeting}>
            Hi <span className={styles.wavingEmoji}>{"\u{1F44B}"}</span>
          </h1>
          <h2 className={styles.mainText}>
            I'm <span className={styles.highlight}>Omons</span>
          </h2>
          <p className={styles.subText}>
            A Software Engineer crafting beautiful digital experiences
          </p>
          <div className={styles.ctaContainer}>
            <a href="#projects" className="button">
              View My Work
            </a>
            <a href="#contact" className={`button ${styles.outlineButton}`}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className={styles.scrollIndicator} onClick={scrollToAbout}>
          <FontAwesomeIcon icon={faArrowDown} className={styles.scrollIcon} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
