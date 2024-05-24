import * as React from 'react';
import styles from "./styles/navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>&nbsp;</div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#certification">Certification</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
