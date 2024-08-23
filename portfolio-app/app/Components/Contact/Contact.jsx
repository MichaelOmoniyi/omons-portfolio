import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <h2 className="header">Contact</h2>
      <div className={styles.contacts}>
        <a href={`tel:08186897876`} target="_blank">
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faPhone} className={styles.icons} />
            <p className={styles.detail}>08186897876, 08152889069</p>
          </div>
        </a>
        <a href={`mailto:oomoniyimicheal18@gmail.com`} target="_blank">
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
            <p className={styles.detail}>oomoniyimicheal18@gmail.com</p>
          </div>
        </a>
        <a href="https://bit.ly/40It02c" target="_blank">
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
            <p className={styles.detail}>MichaelOmoniyi</p>
          </div>
        </a>
        <a href="https://twitter.com/_omons" target="_blank">
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faTwitter} className={styles.icons} />
            <p className={styles.detail}>_omons</p>
          </div>
        </a>
        <a href="https://github.com/MichaelOmoniyi" target="_blank">
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faGithub} className={styles.icons} />
            <p className={styles.detail}>MichaelOmoniyi</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
