"use client";
import React from "react";
import Humburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const handleHamburgerClicking = (hamburgerId) => {
    const hamburgerInput = document.getElementById(hamburgerId);
    const dropdown = document.getElementById("dropdownContainer");
    if (!hamburgerInput.checked) {
      dropdown.classList.add(`${styles.dropdownContainerVisible}`);
    } else {
      dropdown.classList.remove(`${styles.dropdownContainerVisible}`);
    }
  };

  return (
    <div className={styles.NavBarContainer}>
      <div className={styles.NavBarMain}>
        <h1 className={`${styles.logoText} font-bold text-3xl`}>Omons</h1>
        <div className={styles.smxm}>
          <div className={`${styles.navLinks} text-xl font-medium`}>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="#sayhi">Say Hi</a>
          </div>
          <Humburger onHamburgerClicking={handleHamburgerClicking} />
        </div>
      </div>
      <div className={`${styles.dropdownContainer}`} id="dropdownContainer">
        <div className={`${styles.dropdownLinks} text-xl font-medium`}>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="#sayhi">Say Hi</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
