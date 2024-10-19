import * as React from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/about.module.scss";

export default function About() {
  return (
    <section id="about">
      <div className={styles.container}>
        <Image src="https://ucarecdn.com/5debb094-9933-4f51-ab6b-f7510eff3846/-/preview/1000x1000/" width={400} height={400} layout="responsive" alt="Coding" className={styles.aboutPhoto} />
        <div className={styles.textBox}>
          <Typography variant="h4" className={styles.aboutTitle}>
            <span className={styles.aboutTitleFirst}>A</span> short about me.
          </Typography>
          <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, excepturi. Ratione eveniet libero distinctio, exercitationem natus quia similique nesciunt non nobis expedita reiciendis, sapiente aut? Laboriosam exercitationem sequi rerum. Omnis?
          </p>
        </div>
      </div>
    </section>
  );
}
