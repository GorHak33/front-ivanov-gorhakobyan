// Navbar.jsx

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ setSearchQuery }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsSticky(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isSticky && styles.stickyHeader}`}>
        <h1>Logo</h1>
        <div>
          <input
            type="text"
            placeholder="Search by tags ..."
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
      <nav className={isSticky ? styles.stickyNav : ""}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
