"use client";
import React, { useEffect } from "react";
import styles from "./Hamburger.module.css";

const Humburger = ({ onHamburgerClicking }) => {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const screenHeight =
      window.innerHeight ||
      document.body.clientHeight ||
      document.documentElement.clientHeight;
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    window.addEventListener("scroll", () => {
      let scrollTopPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (window.scrollY > screenHeight) {
        hamburger.classList.add(`${styles.hamburgerScroll}`);
      } else {
        hamburger.classList.remove(`${styles.hamburgerScroll}`);
      }

      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    });
  });

  const handleClick = (event) => {
    if (onHamburgerClicking) {
      onHamburgerClicking("nav-btn");
    }
  };
  return (
    <div className={styles.hamburgerContainer}>
      <input
        type="checkbox"
        name="nav-btn"
        id="nav-btn"
        className={styles.navBtn}
      />
      <label htmlFor="nav-btn" className={styles.navBtnLabel}>
        <span
          className={styles.hamburger}
          id="hamburger"
          onClick={handleClick}
        ></span>
      </label>
    </div>
  );
};

export default Humburger;
