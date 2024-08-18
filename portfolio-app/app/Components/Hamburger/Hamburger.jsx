"use client";
import React from "react";
import styles from "./Hamburger.module.css";

const Humburger = ({ onHamburgerClicking }) => {
  const handleClick = (event) => {
    if(onHamburgerClicking) {
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
        <span className={styles.hamburger} onClick={handleClick}></span>
      </label>
    </div>
  );
};

export default Humburger;
