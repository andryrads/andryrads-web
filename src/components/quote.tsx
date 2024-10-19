import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from "./styles/quote.module.scss";

export default function Quote() {
  return (
    <section id="quote">
      <div className={styles.quote}>
        <div className={styles.quoteText}>
          High effort paired with working smart is like planting a seed in fertile soil; with patience and care, it blossoms into a flourishing garden.
        </div>
        <div className={styles.authorText}>
          - Andry, 2021
        </div>
      </div>
    </section>
  );
}
