"use client";
import React, { useEffect, useState } from "react";
import Humburger from "../Hamburger/Hamburger";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navBar = document.getElementById("navbarContainer");
    const navBarMain = document.getElementById("navbarMain");
    const logoText = document.getElementById("logoText");
    const navLinks = document.querySelectorAll(".navLink");
    const dropdownLinks = document.getElementById("dropdownLinks");
    const scrollThreshold = 100;

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    // Smooth scroll function
    const smoothScroll = (e, id) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href").slice(1);
        if (id) smoothScroll(e, id);
      });
    });

    window.addEventListener("scroll", () => {
      let scrollTopPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (window.scrollY > scrollThreshold) {
        navBarMain.classList.add(`${styles.beyondLandingPage}`);
        logoText.classList.add(`${styles.logoTextScroll}`);
        dropdownLinks.classList.add(`${styles.dropdownLinksScroll}`);
        navLinks.forEach((link) => {
          link.classList.add(`${styles.navLinkScoll}`);
        });

        if (scrollTopPosition >= lastScrollTop) {
          setTimeout(() => {
            navBar.style.transform = "translateY(-100%)";
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
  }, []);

  const handleHamburgerClicking = (hamburgerId) => {
    setIsMenuOpen(!isMenuOpen);
    const dropdown = document.getElementById("dropdownContainer");
    const navLinks = document.querySelectorAll(".navLink");
    const body = document.body;

    if (!isMenuOpen) {
      dropdown.classList.add(`${styles.dropdownContainerVisible}`);
      body.style.overflow = "hidden";
    } else {
      dropdown.classList.remove(`${styles.dropdownContainerVisible}`);
      body.style.overflow = "";
    }

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", () => {
        if (dropdown.classList.contains(`${styles.dropdownContainerVisible}`)) {
          closeMenu();
        }
      });
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    const dropdown = document.getElementById("dropdownContainer");
    const body = document.body;

    dropdown.classList.remove(`${styles.dropdownContainerVisible}`);
    body.style.overflow = "";
  };

  return (
    <div className={styles.NavBarContainer} id="navbarContainer">
      <div className={styles.NavBarMain} id="navbarMain">
        <a href="/">
          <h1 className={`${styles.logoText} font-bold text-3xl`} id="logoText">
            Omons
          </h1>
        </a>
        <div className={styles.smxm}>
          <div
            className={`${styles.navLinks} text-xl font-medium`}
            id="navLinks"
          >
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
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <Humburger
            onHamburgerClicking={handleHamburgerClicking}
            isOpen={isMenuOpen}
          />
        </div>
      </div>
      <div className={`${styles.dropdownContainer}`} id="dropdownContainer">
        <button className={styles.closeButton} onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div
          className={`${styles.dropdownLinks} text-xl font-medium`}
          id="dropdownLinks"
        >
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
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
