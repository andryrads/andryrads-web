"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/certification.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { useInView } from 'react-intersection-observer';;

export default function Certification() {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        // const data = await fetchCertifications();
        // setItemData(data);
        setItemData(spareItemData);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCertifications();
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section id="certification">
      <div className={styles.container} ref={ref}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
            <ImageList>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="span" className={styles.headTitle}>Certification</ListSubheader>
              </ImageListItem>
              {itemData.map((item) => (
                <ImageListItem key={item.src} className={`${styles.item} ${hasAnimated ? styles.visible : ""}`}>
                  <img
                    srcSet={`${item.src}`}
                    src={`${item.src}`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    position="below"
                    className={styles.desc}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </div>
    </section>
  );
}

const spareItemData = [
  {
    name: "IQ Test Certificate",
    src: "https://ucarecdn.com/51a38418-3bb5-4574-9f0a-8746c87a51bc/-/preview/1000x706/"
  },
  {
    name: "TOEFL EPrT Certificate",
    src: "https://ucarecdn.com/58ecff99-aac0-4698-a0dc-d4df96e510e6/-/preview/1000x706/"
  },
  {
    name: "Algorithm Fundamental Certificate",
    src: "https://ucarecdn.com/d59b0eee-a1ae-4266-ae3c-cd954ccb68dc/-/preview/1000x772/"
  },
  {
    name: "Front-end Basic Certificate",
    src: "https://ucarecdn.com/c5943fc1-264d-4a70-8ec9-9bb25ab17094/-/preview/1000x772/"
  },
  {
    name: "Front-end Advance Certificate",
    src: "https://ucarecdn.com/66dd39be-f62c-4066-9b51-f9d2a66f08a9/-/preview/1000x772/"
  },
  {
    name: "Professional Database Certificate",
    src: "https://ucarecdn.com/b7cf73de-da11-4cef-a76f-16122491610a/-/preview/1000x772/"
  },
  {
    name: "Laravel Framework Certificate",
    src: "https://ucarecdn.com/ec52466c-3b33-4e5f-8dfc-c6af1c2dc50c/-/preview/1000x772/"
  },
  {
    name: "Javascript Certificate",
    src: "https://ucarecdn.com/6c118481-e6a4-4e08-bbb9-fdef34f4f840/-/preview/1000x671/"
  },
  {
    name: "Responsive Web Design",
    src: "https://ucarecdn.com/81f69b18-5fb5-46c2-99af-35a99f735c2a/-/preview/1000x671/"
  },
]
