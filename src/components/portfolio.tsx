"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from "./styles/portfolio.module.scss";
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className={styles.container}>
        <p className={styles.narrative}>
        I have an extensive portfolio of projects in IT and application development, with a particular focus on web development. 
        Over the years, I’ve worked on a wide variety of projects, ranging from dynamic websites and e-commerce platforms to custom web applications tailored to specific client needs. 
        My experience spans across various technologies and frameworks, enabling me to deliver robust, user-friendly, and scalable solutions. 
        Explore my project portfolio to see the breadth and depth of my expertise in the field.
        </p>
        <Typography variant="h6" className={styles.title}>
          Download my Project Portfolio as a PDF document :
        </Typography>
        <Button 
          variant="contained" 
          endIcon={<CloudDownloadIcon />} 
          className={styles.btnDownload}
          onClick={handleDownload}
        >
          Download
        </Button>
      </div>
    </section>
  );
}

const handleDownload = () => {
  const url = 'https://drive.google.com/uc?export=download&id=10ctK3kIUxgNYziGgedZc2MWnXoYBGfaA';
  const link = document.createElement('a');
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
