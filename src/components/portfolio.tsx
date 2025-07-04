"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import styles from "./styles/portfolio.module.scss";
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useInView } from 'react-intersection-observer';

export default function Portfolio() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const handleDownload = () => {
    const url = `${process.env.NEXT_PUBLIC_PORTFOLIO_LINK}`;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="portfolio">
      <div className={styles.container} ref={ref}>
        <div className={styles.headTitleContainer}>
          <DashboardIcon className={styles.portfolioIcon} />
          <Typography variant="h5" className={styles.headTitle}>
            {"MY PROJECT'S PORTFOLIO"}
          </Typography>
          <DashboardIcon className={styles.portfolioIcon} />
        </div>
        <p className={styles.narrative}>
        Over the years, I’ve worked on a wide variety of projects tailored to specific client needs. <br />
        Explore my project portfolio to see the breadth and depth of my expertise in the field.
        </p>
        <Typography variant="h6" className={styles.title}>
          View my Project Portfolio as a PDF document :
        </Typography>
        <Button 
          variant="contained" 
          endIcon={<AppRegistrationIcon />} 
          className={`${styles.btnDownload} ${hasAnimated ? styles.visible : ""}`}
          onClick={handleDownload}
        >
          View Portfolio
        </Button>
      </div>
    </section>
  );
}