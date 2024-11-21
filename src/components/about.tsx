"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/about.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  const [loadingAboutData, setLoadingAboutData] = useState(true);
  const [aboutText, setAboutText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const fetchAboutText = () => {
      const envText = process.env.NEXT_PUBLIC_ABOUT_TEXT;
      if (envText) {
        setAboutText(envText);
        setLoadingAboutData(false);
      } else {
        setTimeout(() => {
          setLoadingAboutData(false);
        }, 1000);
      }
    };
    fetchAboutText();
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section id="about">
      <div className={styles.container}>
        {loadingAboutData ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '300px' }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <>
          <Image src="https://ucarecdn.com/5debb094-9933-4f51-ab6b-f7510eff3846/-/preview/1000x1000/" width={400} height={400} alt="Coding" className={styles.aboutPhoto} />
          <div className={styles.textBox} ref={ref}>
            <Typography variant="h4" className={styles.aboutTitle}>
              <span className={styles.aboutTitleFirst}>A</span> short about me.
            </Typography>
            <p className={styles.aboutText}>
              {hasAnimated ? (
                <Typewriter
                  words={[aboutText]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={1}
                  delaySpeed={1000}
                />
              ) : (
                ''
              )}
            </p>
          </div>
          </>
        )}
      </div>
    </section>
  );
}
