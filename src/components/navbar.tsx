"use client";

import * as React from 'react';
import styles from "./styles/navbar.module.scss";
import { useState, useEffect } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <button className={styles.hamburger} onClick={toggleMenu}>
            {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </button>
        </div>
        <div className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu}>
          <ul>
              <li><a href="#main">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#certification">Certification</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
