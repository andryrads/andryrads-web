'use client';

import * as React from 'react';
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import styles from "./styles/quote.module.scss";

export default function Quote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${styles.quoteText}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="quote">
      <div className={styles.quote}>
        <div
          className={`${styles.quoteText} ${isVisible ? styles.visible : ""}`}
        >
          High effort paired with working smart is like planting a seed in fertile soil; with patience and care, it blossoms into a flourishing garden.
        </div>
        <div className={styles.authorText}>
          - Andry, 2021
        </div>
      </div>
    </section>
  );
}
