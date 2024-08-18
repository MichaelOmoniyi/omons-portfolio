import React from 'react'
import styles from "./Hamburger.module.css";

const Humburger = () => {
  return (
    <div className={styles.hamburgerContainer}>
      <input
        type="checkbox"
        name="nav-btn"
        id="nav-btn"
        className={styles.navBtn}
      />
      <label htmlFor="nav-btn" className={styles.navBtnLabel}>
        <span className={styles.hamburger}></span>
      </label>
    </div>
  );
}

export default Humburger