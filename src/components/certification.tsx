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
                <ListSubheader component="span" className={styles.headTitle}>Certification & Courses</ListSubheader>
              </ImageListItem>
              {itemData.map((item) => (
                <ImageListItem key={item.src} className={styles.item}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={500}
                    height={300}
                    priority={false}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto' }}
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
    src: "https://ucarecdn.com/5d611cf8-846c-40b2-9e6a-17cdfe6126d7/-/preview/999x708/"
  },
  {
    name: "Front-end Basic Certificate",
    src: "https://ucarecdn.com/42b1f2db-1ecb-49f4-aaf5-27db89b72428/-/preview/999x708/"
  },
  {
    name: "Front-end Advance Certificate",
    src: "https://ucarecdn.com/8965ee71-2b0f-4165-8b7f-2196122688f0/-/preview/1000x706/"
  },
  {
    name: "Professional Database Certificate",
    src: "https://ucarecdn.com/8b0c1037-9eac-4f2f-8059-d760cb2f50f3/-/preview/1000x707/"
  },
  {
    name: "Laravel Framework Certificate",
    src: "https://ucarecdn.com/97b6653e-46f0-486b-b1d7-f27451927977/-/preview/999x708/"
  },
  {
    name: "UI Fundamental Certificate",
    src: "https://ucarecdn.com/855d8a5e-dd85-465b-bc36-2e5959a949b6/-/preview/1000x707/"
  },
  {
    name: "UX Fundamental Certificate",
    src: "https://ucarecdn.com/22950daa-70e2-4ec1-9dec-7388a524292b/-/preview/1000x708/"
  },
  {
    name: "Microsoft PowerPoint Certificate",
    src: "https://ucarecdn.com/bec20abb-1f5d-453a-9592-6167633bd534/-/preview/1000x706/"
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
