"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./LandingPage.module.css";

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
      { threshold: 1 }
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
  return (
    <div className={styles.landingPageContainer}>
      <div
        ref={landingTextRef}
        className={`${styles.landingPageContent} ${
          isLandingTextVisible ? styles.fadeIn : ""
        }`}
      >
        <div>
          <p className={`${styles.text}`}>
            Hi <span className={styles.wavingEmoji}>{"\u{1F44B}"}</span>,
            welcome to my portfolio page
          </p>
        </div>
        <div>
          <p className={`${styles.subText} italic`}>
            Taking a dive into the person of omons...
          </p>
        </div>
      </div>

      <div className={styles.bgPattern}></div>
    </div>
  );
};

export default LandingPage;
