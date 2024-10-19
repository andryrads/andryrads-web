import * as React from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        ©{currentYear} - All Rights Reserved. | Developed by Andry Rachdian Sumardi (andryrads)
    </footer>
  );
}
