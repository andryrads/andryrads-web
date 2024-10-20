"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/about.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { fetchAbout } from "../api/regDataService";

export default function About() {
  const [aboutData, setAboutData] = useState('');
  const [loadingAboutData, setLoadingAboutData] = useState(true);
  const [errorAboutData, setErrorAboutData] = useState(null);
  
  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const data = await fetchAbout();
        setAboutData(data);
      } catch (err:any) {
        setErrorAboutData(err.message);
      } finally {
        setLoadingAboutData(false);
      }
    };

    loadAboutData();
  }, []);

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
          <div className={styles.textBox}>
            <Typography variant="h4" className={styles.aboutTitle}>
              <span className={styles.aboutTitleFirst}>A</span> short about me.
            </Typography>
            <p className={styles.aboutText}>
              { aboutData.content }
            </p>
          </div>
          </>
        )}
        
      </div>
    </section>
  );
}
