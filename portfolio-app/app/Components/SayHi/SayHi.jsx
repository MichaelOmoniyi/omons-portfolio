import React from "react";
import styles from "./SayHi.module.css";

const SayHi = () => {
  return (
    <div className="container">
      <h1 className={`header`}>Say Hi</h1>
      <div className={styles.formContainer}>
        <form action="#">
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
              <label htmlFor="sayhi">What would you like to say:</label>
              <textarea name="sayhi" id="sayhi"></textarea>
            </div>
            <button type="submit">Say Hi {"\u{1F44B}"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SayHi;
