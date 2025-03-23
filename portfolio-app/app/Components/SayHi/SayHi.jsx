"use client";
import { React, useState } from "react";
import styles from "./SayHi.module.css";
import emailjs from "@emailjs/browser";

const SayHi = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        formData,
        process.env.EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setLoading(false);
        setStatus(true);
        setMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setLoading(false);
      setStatus(false);
      setMessage("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }

    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 5000);
  };

  return (
    <div className="container">
      <h1 className={`header`} id="sayhi">
        Say Hi
      </h1>
      <div className={styles.formContainer}>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className={styles.formContent}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">What would you like to say:</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="mb-4">
              Say Hi {"\u{1F44B}"}
            </button>
            {loading ? (
              <div className="w-full display flex justify-center">
                <span className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin text-center mr-auto ml-auto"></span>
              </div>
            ) : null}
            {message.length > 0 ? (
              <div
                className={`text-center font-bold ${
                  status === true ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SayHi;
