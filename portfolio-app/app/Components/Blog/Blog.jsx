"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen, faClock } from "@fortawesome/free-solid-svg-icons";

const blogPosts = [
  {
    id: 1,
    title:
      "The Surprising Way Blockchain Could Quietly Revolutionize Systems Engineering",
    excerpt:
      "Blockchain technology is set to transform how systems engineering is conducted, offering unprecedented opportunities for collaboration, transparency, and efficiency.",
    mediumUrl:
      "https://medium.com/@oomoniyimicheal18/the-surprising-way-blockchain-could-quietly-revolutionize-systems-engineering-724b8096d3a9",
    readTime: "3 min read",
    tags: ["Blockchain", "Systems Engineering", "AI"],
    publishDate: "2025-06-11",
  },
  {
    id: 2,
    title:
      "What happens when you type google.com in your browser and press enter?",
    excerpt:
      "When you type google.com in your browser and press enter, your browser sends a request to a server called a DNS resolver. The DNS resolver then looks up the IP address of google.com and sends it back to your browser. Your browser then uses the IP address to connect to the Google server and download the Google homepage.",
    mediumUrl:
      "https://medium.com/@oomoniyimicheal18/what-happens-when-you-type-google-com-in-your-browser-and-press-enter-ee242e27aadb",
    readTime: "3 min read",
    tags: ["google", "browser", "internet"],
    publishDate: "2023-12-12",
  },
  {
    id: 3,
    title: "Clarify ALX Research Project",
    excerpt:
      "This is a research project that I did for the ALX Software Engineering Program. It is a project that I did to learn more about the software engineering process and how to use the software engineering tools and techniques.",
    mediumUrl:
      "https://medium.com/@oomoniyimicheal18/clarify-alx-reasearch-project-83c9b73feb53",
    readTime: "5 min read",
    tags: ["ALX", "Software Engineering", "Research"],
    publishDate: "2024-02-22",
  },
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={styles.blogSection} id="blog">
      <div className="container">
        <h2 className="header">Technical Blog</h2>
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              ref={(el) => (refs.current[index] = el)}
              id={`blog-${post.id}`}
              className={`${styles.blogCard} ${
                isVisible[`blog-${post.id}`] ? styles.fadeIn : ""
              }`}
            >
              <div className={styles.blogContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      <FontAwesomeIcon
                        icon={faHashtag}
                        className={styles.tagIcon}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.meta}>
                  <span>
                    <FontAwesomeIcon icon={faClock} />
                    {post.readTime}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faBookOpen} />
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMore}
                >
                  <FontAwesomeIcon
                    icon={faMedium}
                    className={styles.mediumIcon}
                  />
                  Read on Medium
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
