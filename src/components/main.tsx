"use client";

import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/main.module.scss";

export default function Main() {
  const hasLogged = React.useRef(false);
  useEffect(() => {
    if (!hasLogged.current) {
      console.log('INFO : My MongoDB free plan is outdated. So the NodeJS Backend currently not used and using static data instead for temporary period.');
      hasLogged.current = true;
    }
  }, []);

  return (
    <section id="main">
      <div className={styles.parallax}>
        <div className={styles.nameWrapper}>
          <Typography variant="h1">
            Andry
          </Typography>
          <Typography variant="h3">
            Rachdian
          </Typography>
          <Typography variant="h3">
            Sumardi
          </Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            -PROGRAMMER-
          </Typography>
        </div>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <Image src="https://ucarecdn.com/bd225e83-e140-47b1-a621-49d4f773bdf8/-/preview/666x1000/" width={1000} height={1000} alt="My Photo" className={styles.myPhoto} />
      </div>
    </section>
  );
}
