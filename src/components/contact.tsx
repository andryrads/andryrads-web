"use client";

import * as React from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/contact.module.scss";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contact() {
  return (
    <section id="contact">
      <div className={styles.container}>
        <div className={styles.contactCard}>
          <LocalPhoneIcon className={styles.contactIcon}/>
          <Typography variant="h6" className={styles.contactText}>
            +62 821 2448 4404
          </Typography>
        </div>
        <div className={styles.contactCard}>
          <EmailIcon className={styles.contactIcon}/>
          <Typography variant="h6" className={styles.contactText}>
            andry.rads@gmail.com
          </Typography>
        </div>
        <div className={styles.contactCard}>
          <RoomIcon className={styles.contactIcon}/>
          <Typography variant="h6" className={styles.contactText}>
            Bandung, Indonesia
          </Typography>
        </div>
      </div>
      <div className={styles.containerWhatsapp}>
        <Button 
          variant="contained" 
          endIcon={<WhatsAppIcon />} 
          className={styles.btnWhatsapp}
          onClick={handleWhatsapp}
        >
          or Directly Whatsapp me
        </Button>
      </div>
    </section>
  );
}

const handleWhatsapp = () => {
  const url = 'https://api.whatsapp.com/send?phone=6282124484404';
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
