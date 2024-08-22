"use client";
import React, { useEffect } from "react";
import Humburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.css";

const NavBar = () => {
  useEffect(() => {
    const navBar = document.getElementById("navbarContainer");
    const navBarMain = document.getElementById("navbarMain");
    const logoText = document.getElementById("logoText");
    const navLinks = document.querySelectorAll(".navLink")
    const dropdownLinks = document.getElementById("dropdownLinks");
    const screenHeight =
      window.innerHeight ||
      document.body.clientHeight ||
      document.documentElement.clientHeight;
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    window.addEventListener("scroll", () => {
      let scrollTopPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (window.scrollY > screenHeight) {
        navBarMain.classList.add(`${styles.beyondLandingPage}`);
        logoText.classList.add(`${styles.logoTextScroll}`);
        dropdownLinks.classList.add(`${styles.dropdownLinksScroll}`);
        navLinks.forEach((link) => {
          link.classList.add(`${styles.navLinkScoll}`);
        })

        if (scrollTopPosition >= lastScrollTop) {
          setTimeout(() => {
            navBar.style.transform = "translateY(-400px)";
          }, 1);
        } else {
          setTimeout(() => {
            navBar.style.transform = "translateY(0)";
          }, 1);
        }
      } else {
        navBarMain.classList.remove(`${styles.beyondLandingPage}`);
        logoText.classList.remove(`${styles.logoTextScroll}`);
        dropdownLinks.classList.remove(`${styles.dropdownLinksScroll}`);
        navLinks.forEach((link) => {
          link.classList.remove(`${styles.navLinkScoll}`);
        });
      }

      lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    });

    
  });

  const handleHamburgerClicking = (hamburgerId) => {
    const hamburgerInput = document.getElementById(hamburgerId);
    const dropdown = document.getElementById("dropdownContainer");
    const navLinks = document.querySelectorAll(".navLink");
    if (!hamburgerInput.checked) {
      dropdown.classList.add(`${styles.dropdownContainerVisible}`);
    } else {
      dropdown.classList.remove(`${styles.dropdownContainerVisible}`);
    }

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", () => {
        if (dropdown.classList.contains(`${styles.dropdownContainerVisible}`)) {
          dropdown.classList.remove(`${styles.dropdownContainerVisible}`);
          hamburgerInput.checked = false;
        }
      });
    });
  };

  return (
    <div className={styles.NavBarContainer} id="navbarContainer">
      <div className={styles.NavBarMain} id="navbarMain">
        <a href="/">
          <h1 className={`${styles.logoText} font-bold text-3xl`} id="logoText">Omons</h1>
        </a>
        <div className={styles.smxm}>
          <div className={`${styles.navLinks} text-xl font-medium`} id="navLinks">
            <a className={`${styles.navLink} navLink`} href="#about">
              About
            </a>
            <a className={`${styles.navLink} navLink`} href="#projects">
              Projects
            </a>
            <a className={`${styles.navLink} navLink`} href="#skills">
              Skills
            </a>
            <a className={`${styles.navLink} navLink`} href="#contact">
              Contact
            </a>
            <a className={`${styles.navLink} navLink`} href="#sayhi">
              Say Hi
            </a>
            <a
              className={`${styles.navBtn} navBtn`}
              href="https://drive.google.com/file/d/1fGVoHtV5OPfh0kZ17vINp_XDYuiEr1lO/view?usp=drive_link"
            >
              Download Resume
            </a>
          </div>
          <Humburger onHamburgerClicking={handleHamburgerClicking} />
        </div>
      </div>
      <div className={`${styles.dropdownContainer}`} id="dropdownContainer">
        <div className={`${styles.dropdownLinks} text-xl font-medium`} id="dropdownLinks">
          <a href="#about" className="navLink">
            About
          </a>
          <a href="#projects" className="navLink">
            Projects
          </a>
          <a href="#skills" className="navLink">
            Skills
          </a>
          <a href="#contact" className="navLink">
            Contact
          </a>
          <a href="#sayhi" className="navLink">
            Say Hi
          </a>
          <a
            href="https://drive.google.com/file/d/1fGVoHtV5OPfh0kZ17vINp_XDYuiEr1lO/view?usp=drive_link"
            className="navLink"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
