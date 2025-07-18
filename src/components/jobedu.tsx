"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/jobedu.module.scss";
import { useInView } from 'react-intersection-observer';;

export default function Jobedu() {
  const [jobEduData, setJobEduData] = useState({
    jobLogo: '',
    jobRole: '',
    jobCompany: '',
    eduLogo: '',
    eduField: '',
    eduSchool: '',
  });
  const [hasAnimatedJob, setHasAnimatedJob] = useState(false);
  const [hasAnimatedEdu, setHasAnimatedEdu] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const fetchJobeduData = () => {
      setJobEduData({
        jobLogo: process.env.NEXT_PUBLIC_JOB_LOGO || '',
        jobRole: process.env.NEXT_PUBLIC_JOB_ROLE || '',
        jobCompany: process.env.NEXT_PUBLIC_JOB_COMPANY || '',
        eduLogo: process.env.NEXT_PUBLIC_EDU_LOGO || '',
        eduField: process.env.NEXT_PUBLIC_EDU_FIELD || '',
        eduSchool: process.env.NEXT_PUBLIC_EDU_SCHOOL || '',
      });
    };
    fetchJobeduData();
  }, []);

  useEffect(() => {
  if (inView) {
    setHasAnimatedJob(true);
      const timer = setTimeout(() => {
        setHasAnimatedEdu(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="jobedu">
      <div className={styles.container} ref={ref}>
        <div className={styles.job}>
          <div className={styles.title}>
            <span>CURRENT</span> 
            <span className={styles.titleHighlighted}>JOB</span>
          </div>
          <div className={`${styles.jobWrapper} ${hasAnimatedJob ? styles.slided : ""}`}>
            <div className={styles.logo}>
            <Image 
              src={jobEduData.jobLogo || 'https://ucarecdn.com/6404d7b9-9c84-449b-9128-49530fc6ae68/-/preview/50x50/'}
              width={50} 
              height={50} 
              alt="Job Logo"
              className={styles.logoImg} 
            />
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                {jobEduData.jobRole}
              </div>
              <div className={styles.contentSubTitle}>
                {jobEduData.jobCompany}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.edu}>
          <div className={styles.title}>
            <span>LATEST</span> 
            <span className={styles.titleHighlighted}>EDUCATION</span>
          </div>
          <div className={`${styles.eduWrapper} ${hasAnimatedEdu ? styles.slided : ""}`}>
            <div className={styles.logo}>
            <Image 
              src={jobEduData.eduLogo || 'https://ucarecdn.com/6404d7b9-9c84-449b-9128-49530fc6ae68/-/preview/50x50/'}
              width={50} 
              height={50} 
              alt="Education Logo"
              className={styles.logoImg} 
            />
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                {jobEduData.eduField}
              </div>
              <div className={styles.contentSubTitle}>
                {jobEduData.eduSchool} <span style={{fontWeight: 200, fontStyle: "italic"}}>(On-Going)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}