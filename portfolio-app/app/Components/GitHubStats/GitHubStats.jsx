"use client";
import React, { useEffect, useState } from "react";
import styles from "./GitHubStats.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faStar,
  faCodeBranch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const GitHubStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    publicRepos: 0,
    stars: 0,
    contributions: 0,
    followers: 0,
    featuredRepos: [],
  });
  const username = "MichaelOmoniyi"; // Your GitHub username

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`
        );
        const reposData = await reposResponse.json();

        // Calculate total stars
        const totalStars = reposData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );

        // Get top 3 repos by stars
        const topRepos = reposData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3)
          .map((repo) => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
          }));

        setStats({
          publicRepos: userData.public_repos,
          stars: totalStars,
          followers: userData.followers,
          featuredRepos: topRepos,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchGitHubStats();
  }, [username]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("github-stats");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      className={`${styles.statsSection} ${isVisible ? styles.visible : ""}`}
      id="github-stats"
    >
      <div className="container">
        <h2 className="header">GitHub Activity</h2>

        <div className={styles.statsGrid}>
          <div className={styles.statsCard}>
            <div className={styles.contributionGraph}>
              <img
                src={`https://ghchart.rshah.org/${username}`}
                alt="GitHub Contribution Graph"
                className={styles.contributionImg}
              />
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <FontAwesomeIcon icon={faCode} className={styles.metricIcon} />
              <div className={styles.metricContent}>
                <h3>Repositories</h3>
                <p>{stats.publicRepos}+ Public Repos</p>
              </div>
            </div>

            <div className={styles.metricCard}>
              <FontAwesomeIcon icon={faStar} className={styles.metricIcon} />
              <div className={styles.metricContent}>
                <h3>Stars Earned</h3>
                <p>{stats.stars} Stars</p>
              </div>
            </div>

            <div className={styles.metricCard}>
              <FontAwesomeIcon icon={faUsers} className={styles.metricIcon} />
              <div className={styles.metricContent}>
                <h3>Followers</h3>
                <p>{stats.followers} Followers</p>
              </div>
            </div>

            <div className={styles.metricCard}>
              <FontAwesomeIcon
                icon={faCodeBranch}
                className={styles.metricIcon}
              />
              <div className={styles.metricContent}>
                <h3>Contributions</h3>
                <p>View on GitHub</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featuredRepos}>
          <h3>Featured Repositories</h3>
          <div className={styles.repoGrid}>
            {stats.featuredRepos.map((repo, index) => (
              <div key={index} className={styles.repoCard}>
                <h4>{repo.name}</h4>
                <p>{repo.description || "No description available"}</p>
                <div className={styles.repoStats}>
                  <span>
                    <FontAwesomeIcon icon={faStar} /> {repo.stars}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCodeBranch} /> {repo.forks}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewProfile}
        >
          <FontAwesomeIcon icon={faGithub} />
          View GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default GitHubStats;
