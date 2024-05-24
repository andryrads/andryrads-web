import * as React from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/main.module.scss";
import me from "../assets/images/me.png";

export default function Main() {
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
        <img src="https://ucarecdn.com/bd225e83-e140-47b1-a621-49d4f773bdf8/-/preview/666x1000/" alt="My Photo" className={styles.myPhoto} />
      </div>
      <div style={{height:'1000px',backgroundColor:'black',fontSize:'36px'}}>
        &nbsp;
      </div>
    </section>
  );
}
