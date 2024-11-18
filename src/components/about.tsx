"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/about.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

import { fetchAbout } from "../api/regDataService";

export default function About() {
  const [aboutData, setAboutData] = useState('');
  const [loadingAboutData, setLoadingAboutData] = useState(true);
  const [errorAboutData, setErrorAboutData] = useState(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  useEffect(() => {
    const loadAboutData = async () => {
      try {
        // const data = await fetchAbout();
        // setAboutData(data);
        setAboutData(spareAboutData);
      } catch (err:any) {
        setErrorAboutData(err.message);
      } finally {
        setLoadingAboutData(false);
      }
    };

    loadAboutData();
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
          <Image src="https://ucarecdn.com/5debb094-9933-4f51-ab6b-f7510eff3846/-/preview/1000x1000/" width={400} height={400} layout="responsive" alt="Coding" className={styles.aboutPhoto} />
          <div className={styles.textBox} ref={ref}>
            <Typography variant="h4" className={styles.aboutTitle}>
              <span className={styles.aboutTitleFirst}>A</span> short about me.
            </Typography>
            <p className={styles.aboutText}>
              {hasAnimated ? (
                <Typewriter
                  words={[aboutData.content]}
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

const spareAboutData = {
  id: 1,
  content: "Has a high interest in the fields of Computer Technology, Programming, Graphic Design, Multimedia, Industrial Technology, Market Technical Analysis, and Business Development. Enjoying learning new things. Responsible and Reliable to do the work. Being actively involved in an organization enables me to work individually and as a team."
};
