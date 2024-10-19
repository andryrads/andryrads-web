import * as React from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/certification.module.scss";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

export default function Certification() {
  return (
    <section id="certification">
      <div className={styles.container}>
        <ImageList>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="span" className={styles.headTitle}>Certification</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}`}
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
    </section>
  );
}

const itemData = [
  {
    img: 'https://ucarecdn.com/51a38418-3bb5-4574-9f0a-8746c87a51bc/-/preview/1000x706/',
    title: 'IQ Certificate',
  },
  {
    img: 'https://ucarecdn.com/51a38418-3bb5-4574-9f0a-8746c87a51bc/-/preview/1000x706/',
    title: 'IQ Certificate',
  },
  {
    img: 'https://ucarecdn.com/51a38418-3bb5-4574-9f0a-8746c87a51bc/-/preview/1000x706/',
    title: 'IQ Certificate',
  },
  {
    img: 'https://ucarecdn.com/51a38418-3bb5-4574-9f0a-8746c87a51bc/-/preview/1000x706/',
    title: 'IQ Certificate',
  },
];
