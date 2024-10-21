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

import { fetchCertifications } from '../api/certificationService';

export default function Certification() {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <section id="certification">
      <div className={styles.container}>
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
                <ImageListItem key={item.src}>
                  <img
                    srcSet={`${item.src}`}
                    src={`${item.src}`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
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
    name: "IQ Certificate",
    src: "https://ucarecdn.com/51a38418-3bb5-4574-9f0a-8746c87a51bc/-/preview/1000x706/"
  },
  {
    name: "TOEFL Certificate",
    src: "https://ucarecdn.com/58ecff99-aac0-4698-a0dc-d4df96e510e6/-/preview/1000x706/"
  },
  {
    name: "Fundamental Algorithm Certificate",
    src: "https://ucarecdn.com/8f0b6433-8c5a-4e45-b491-859f549241c9/-/preview/1000x772/"
  },
  {
    name: "Front-end Basic Certificate",
    src: "https://ucarecdn.com/9464c7f4-2ffa-4d4f-98ac-b428482f1ed0/-/preview/1000x772/"
  },
  {
    name: "Front-end Advance Certificate",
    src: "https://ucarecdn.com/ed10da24-3288-4d85-8f08-8b38fd72f909/-/preview/1000x772/"
  },
  {
    name: "Professional Database Certificate",
    src: "https://ucarecdn.com/f30c50b5-3f52-4606-b6e6-5d0de7814af9/-/preview/1000x772/"
  },
  {
    name: "Laravel Certificate",
    src: "https://ucarecdn.com/5aadd9e0-62e2-46a3-852d-13ae2747afe7/-/preview/1000x772/"
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
