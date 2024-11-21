'use client';

import * as React from 'react';
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import styles from "./styles/quote.module.scss";
import { useInView } from 'react-intersection-observer';

export default function Quote() {
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

  return (
    <section id="quote">
      <div className={styles.quote} ref={ref}>
        <div
          className={`${styles.quoteText} ${hasAnimated ? styles.visible : ""}`}
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
