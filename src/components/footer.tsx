"use client";

import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/footer.module.scss";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
        ©{currentYear} - All Rights Reserved. | Developed by andryrads
    </footer>
  );
}
