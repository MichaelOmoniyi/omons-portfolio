"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from './Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faHashtag } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js",
    excerpt: "A deep dive into Next.js features and best practices for building scalable web applications",
    mediumUrl: "https://medium.com/@yourusername/article1",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    publishDate: "2024-01-15"
  },
  // Add your other Medium articles here
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
              [entry.target.id]: true
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
              ref={el => refs.current[index] = el}
              id={`blog-${post.id}`}
              className={`${styles.blogCard} ${isVisible[`blog-${post.id}`] ? styles.fadeIn : ''}`}
            >
              <div className={styles.blogContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      <FontAwesomeIcon icon={faHashtag} className={styles.tagIcon} />
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
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMore}
                >
                  <FontAwesomeIcon icon={faMedium} className={styles.mediumIcon} />
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