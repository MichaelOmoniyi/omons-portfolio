"use client";
import React from "react";
import styles from "./SayHi.module.css";
import emailjs from "emailjs-com";

const SayHi = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g7kjlq7", "say_hi_form", e.target, "_eBc_LFctqbjy54pv")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again");
        }
      );
  };


  return (
    <div className="container">
      <h1 className={`header`} id="sayhi">
        Say Hi
      </h1>
      <div className={styles.formContainer}>
        <form id="contactForm" onSubmit={sendEmail}>
          <div className={styles.formContent}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">What would you like to say:</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit">Say Hi {"\u{1F44B}"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SayHi;
