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
        const data = await fetchCertifications();
        setItemData(data);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCertifications();
  }, []);

  if (error) return <p style={{textAlign: 'center'}}>Error: {error}</p>;
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
