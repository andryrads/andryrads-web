"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/skill.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { fetchSoftSkills, fetchHardSkills, fetchItSkillsLanguage, fetchItSkillsFwlb, fetchItSkillsTechstack, fetchItSkillsMultimedia } from '../api/skillService';

export default function Skill() {
  const [softSkillData, setSoftSkillData] = useState([]);
  const [loadingSoftSkill, setLoadingSoftSkill] = useState(true);
  const [errorSoftSkill, setErrorSoftSkill] = useState(null);

  const [hardSkillData, setHardSkillData] = useState([]);
  const [loadingHardSkill, setLoadingHardSkill] = useState(true);
  const [errorHardSkill, setErrorHardSkill] = useState(null);

  const [itSkillLanguageData, setItSkillLanguageData] = useState([]);
  const [errorItSkillLanguageData, setErrorItSkillLanguageData] = useState(null);

  const [itSkillFwlbData, setItSkillFwlbData] = useState([]);
  const [errorItSkillFwlbData, setErrorItSkillFwlbData] = useState(null);

  const [itSkillTechstackData, setItSkillTechstackData] = useState([]);
  const [errorItSkillTechstackData, setErrorItSkillTechstackData] = useState(null);

  const [itSkillMultimediaData, setItSkillMultimediaData] = useState([]);
  const [errorItSkillMultimediaData, setErrorItSkillMultimediaData] = useState(null);

  useEffect(() => {
    const loadSoftSkills = async() => {
      try {
        const data = await fetchSoftSkills();
        setSoftSkillData(data);
      } catch(err:any) {
        setErrorSoftSkill(err.message);
      } finally {
        setLoadingSoftSkill(false);
      }
    };
    const loadHardSkills = async() => {
      try {
        const data = await fetchHardSkills();
        setHardSkillData(data);
      } catch(err:any) {
        setErrorHardSkill(err.message);
      } finally {
        setLoadingHardSkill(false);
      }
    };
    
    const loadItSkillsLanguage = async() => {
      try {
        const data = await fetchItSkillsLanguage();
        setItSkillLanguageData(data);
      } catch(err:any) {
        setErrorItSkillLanguageData(err.message);
      }
    };
    const loadItSkillsFwlb = async() => {
      try {
        const data = await fetchItSkillsFwlb();
        setItSkillFwlbData(data);
      } catch(err:any) {
        setErrorItSkillFwlbData(err.message);
      }
    };
    const loadItSkillsTechstack = async() => {
      try {
        const data = await fetchItSkillsTechstack();
        setItSkillTechstackData(data);
      } catch(err:any) {
        setErrorItSkillTechstackData(err.message);
      }
    };
    const loadItSkillsMultimedia = async() => {
      try {
        const data = await fetchItSkillsMultimedia();
        setItSkillMultimediaData(data);
      } catch(err:any) {
        setErrorItSkillMultimediaData(err.message);
      }
    };

    loadSoftSkills();
    loadHardSkills();

    loadItSkillsLanguage();
    loadItSkillsFwlb();
    loadItSkillsTechstack();
    loadItSkillsMultimedia();
  }, []);

  return (
    <section id="skills">
      <div className={styles.container}>
        <div className={styles.skill}>
          <Typography variant="h6" className={styles.title}>
            SOFT SKILL
          </Typography>
          { loadingSoftSkill ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <List>
              {softSkillData.map((item) => (
                <>
                <ListItem>
                  <ListItemText primary={item.name} primaryTypographyProps={{ variant: "body2" }}  />
                </ListItem>
                <Divider component="li" />
                </>
              ))}
            </List>
          )}
        </div>

        <div className={styles.skill}>
          <Typography variant="h6" className={styles.title}>
            HARD SKILL
          </Typography>
          { loadingHardSkill ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <List>
              {hardSkillData.map((item) => (
                <>
                <ListItem>
                  <ListItemText primary={item.name} primaryTypographyProps={{ variant: "body2" }}  />
                </ListItem>
                <Divider component="li" />
                </>
              ))}
            </List>
          )}
        </div>

        <div className={styles.itSkill}>
          <Typography variant="h6" className={styles.title}>
            IT & PROGRAMMING SKILL
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Programming Language" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <Stack direction="row" spacing={1} className={styles.stackSkill}>
              {itSkillLanguageData.map((item) => (
                <Chip
                  avatar={<Avatar alt="logo" src={item.src} />}
                  label={item.name}
                  variant="outlined"
                  sx={{
                    width: '20%',
                    '@media (max-width: 767px)': {
                      width: '40%',
                    },
                  }}
                />
              ))}
            </Stack>
            <ListItem>
              <ListItemText primary="Library & Framework" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <Stack direction="row" spacing={1} className={styles.stackSkill}>
              {itSkillFwlbData.map((item) => (
                <Chip
                  avatar={<Avatar alt="logo" src={item.src} />}
                  label={item.name}
                  variant="outlined"
                  sx={{
                    width: '20%',
                    '@media (max-width: 767px)': {
                      width: '40%',
                    },
                  }}
                />
              ))}
            </Stack>
            <ListItem>
              <ListItemText primary="Tech Stack" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <Stack direction="row" spacing={1} className={styles.stackSkill}>
              {itSkillTechstackData.map((item) => (
                <Chip
                  avatar={<Avatar alt="logo" src={item.src} />}
                  label={item.name}
                  variant="outlined"
                  sx={{
                    width: '20%',
                    '@media (max-width: 767px)': {
                      width: '40%',
                    },
                  }}
                />
              ))}
            </Stack>
            <ListItem>
              <ListItemText primary="Design & Multimedia Tools" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <Stack direction="row" spacing={1} className={styles.stackSkill}>
              {itSkillMultimediaData.map((item) => (
                <Chip
                  avatar={<Avatar alt="logo" src={item.src} />}
                  label={item.name}
                  variant="outlined"
                  sx={{
                    width: '20%',
                    '@media (max-width: 767px)': {
                      width: '40%',
                    },
                  }}
                />
              ))}
            </Stack>
          </List>
        </div>
      </div>
    </section>
  );
}
