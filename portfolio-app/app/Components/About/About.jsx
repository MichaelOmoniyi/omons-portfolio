import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="container" id="about">
      <h2 className="header">Who is Omons?</h2>
      <div className={styles.profileContainer}>
        <div className={styles.profileImg}>
          <img src="./assets/profileImage.jpeg" alt="My profile" />
        </div>
        <div className={styles.about}>
          <p>
            Hi there! I&apos;m Michael Omoniyi, thought most of my friends call
            me &quot;Omons&quot;. I am a 300-level Systems Engineering student
            at the Univeristy of Lagos, Nigeria.
          </p>
          <p>
            My journey into the tech world began about two years ago, during an
            extended strike in 2022. What started as an opportunity to explore
            new interests quickly turned into a passion. I began as a Frontend
            Engineer, leveraging my background in graphic design from my
            secondary school days and further expanding my skills through the
            ALX Software Engineering Program.
          </p>
          <p>
            While my primary focus is on Frontend Engineering, I&apos;m a tech
            enthusiast with a keen interest in fields such as robotics, IoT,
            cybersecurity, and artificial intelligence. I&apos;ve pursued
            various courses in these areas to deepen my understanding and stay
            at the forefront of emerging technologies.
          </p>
          <p>
            I consider myself an inquisitive and disciplined individual with a
            genuine curiosity for learning and exploring new ideas. But enough
            about me-Let&apos;s dive into the work and projects that define my
            journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
