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

import { fetchSoftSkills, fetchHardSkills } from '../api/skillService';

export default function Skill() {
  const [softSkillData, setSoftSkillData] = useState([]);
  const [loadingSoftSkill, setLoadingSoftSkill] = useState(true);
  const [errorSoftSkill, setErrorSoftSkill] = useState(null);

  const [hardSkillData, setHardSkillData] = useState([]);
  const [loadingHardSkill, setLoadingHardSkill] = useState(true);
  const [errorHardSkill, setErrorHardSkill] = useState(null);

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

    loadSoftSkills();
    loadHardSkills();
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

        <div className={styles.skill}>
          <Typography variant="h6" className={styles.title}>
            IT & PROGRAMMING SKILL
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Programming Language" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <Stack direction="row" spacing={1} className={styles.stackSkill}>
              <Chip
                avatar={<Avatar alt="Natacha" src="https://ucarecdn.com/bd225e83-e140-47b1-a621-49d4f773bdf8/-/preview/666x1000/" />}
                label="Avatar"
                variant="outlined"
                sx={{ width: '20%' }}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label="Avatar"
                variant="outlined"
                sx={{ width: '20%' }}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label="Avatar"
                variant="outlined"
                sx={{ width: '20%' }}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label="Avatar"
                variant="outlined"
                sx={{ width: '20%' }}
              />
              <Chip
                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label="Avatar"
                variant="outlined"
                sx={{ width: '20%' }}
              />
            </Stack>
            <ListItem>
              <ListItemText primary="Library & Framework" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Tech Stack" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Design & Multimedia Tools" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
          </List>
        </div>
      </div>
    </section>
  );
}
