"use client";
import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  window.onload = () => {
    const fadeInElement = document.getElementById("fadeInElement");
    if (fadeInElement) {
      fadeInElement.classList.add(`${styles.fadeIn}`);
    }
  };
  return (
    <div className={styles.landingPageContainer}>
      <div className={`${styles.landingPageContent}`} id="fadeInElement">
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
