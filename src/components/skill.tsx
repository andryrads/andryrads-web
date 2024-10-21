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
        setSoftSkillData(spareSoftSkillData);
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
        setHardSkillData(spareHardSkillData);
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
        setItSkillLanguageData(spareItSkillLanguageData);
      }
    };
    const loadItSkillsFwlb = async() => {
      try {
        const data = await fetchItSkillsFwlb();
        setItSkillFwlbData(data);
      } catch(err:any) {
        setErrorItSkillFwlbData(err.message);
        setItSkillFwlbData(spareItSkillFwlbData);
      }
    };
    const loadItSkillsTechstack = async() => {
      try {
        const data = await fetchItSkillsTechstack();
        setItSkillTechstackData(data);
      } catch(err:any) {
        setErrorItSkillTechstackData(err.message);
        setItSkillTechstackData(spareItSkillTechstackData);
      }
    };
    const loadItSkillsMultimedia = async() => {
      try {
        const data = await fetchItSkillsMultimedia();
        setItSkillMultimediaData(data);
      } catch(err:any) {
        setErrorItSkillMultimediaData(err.message);
        setItSkillMultimediaData(spareItSkillMultimediaData);
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
              {softSkillData.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={item.name} primaryTypographyProps={{ variant: "body2" }}  />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
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
              {hardSkillData.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={item.name} primaryTypographyProps={{ variant: "body2" }}  />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
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
              {itSkillLanguageData.map((item, index) => (
                <Chip
                  key={index}
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
              {itSkillFwlbData.map((item, index) => (
                <Chip
                  key={index}
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
              {itSkillTechstackData.map((item, index) => (
                <Chip
                  key = {index}
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
              {itSkillMultimediaData.map((item, index) => (
                <Chip
                  key={index}
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

const spareSoftSkillData = [
  {
    name: "Fast Learner"
  },
  {
    name: "Detail Oriented"
  },
  {
    name: "Management & Planning"
  },
  {
    name: "Communicatiion"
  },
  {
    name: "Problem Solving"
  },
  {
    name: "Teamwork"
  },
];

const spareHardSkillData = [
  {
    name: "Programming"
  },
  {
    name: "Data Analysis"
  },
  {
    name: "Graphic Design"
  },
  {
    name: "Multimedia"
  },
  {
    name: "Office & ERP"
  },
  {
    name: "Digital Marketing"
  },
  {
    name: "Fast Typing (85 WPM)"
  },
];

const spareItSkillLanguageData = [
  {
    order: 1,
    name: "Javascript",
    src: "https://ucarecdn.com/b8ab384e-a7c9-4d3f-a739-c22363ccc52b/-/preview/428x424/"
  },
  {
    order: 2,
    name: "Typescript",
    src: "https://ucarecdn.com/74a299ec-6a16-4b9a-a353-6921d757ba4b/-/preview/410x424/"
  },
  {
    order: 3,
    name: "PHP",
    src: "https://ucarecdn.com/d59a9a9f-7f51-4135-b0b3-ab8b17507a19/-/preview/450x398/"
  },
  {
    order: 4,
    name: "Python",
    src: "https://ucarecdn.com/50f02af1-3be6-4bab-a3e5-bac89da36473/-/preview/450x398/"
  },
  {
    order: 5,
    name: "C#",
    src: "https://ucarecdn.com/1266ecd0-518a-4f91-abe9-7e1803bc3592/-/preview/546x544/"
  },
  {
    order: 6,
    name: "Pinescript",
    src: "https://ucarecdn.com/cf47bc78-b276-47a4-9cbb-8aa48e3cbdc9/-/preview/546x544/"
  },
  {
    order: 7,
    name: "HTML",
    src: "https://ucarecdn.com/de1f0894-6017-4433-8f08-dd0d0daf2c9c/-/preview/522x484/"
  },
  {
    order: 8,
    name: "CSS",
    src: "https://ucarecdn.com/348ae53e-0610-4d82-b33f-589afb5861c4/-/preview/522x484/"
  },
  {
    order: 9,
    name: "SQL",
    src: "https://ucarecdn.com/5de38b3a-a8d5-441a-bddc-854e6308dbed/-/preview/522x510/"
  },
  {
    order: 10,
    name: "NoSQL",
    src: "https://ucarecdn.com/59bf09c3-9b8e-4f40-99ca-0c57e6564779/-/preview/522x510/"
  },
];

const spareItSkillFwlbData = [
  {
    order: 1,
    name: "Vue js",
    src: "https://ucarecdn.com/668bfd32-9b92-434b-b5ca-28c065656c90/-/preview/522x510/"
  },
  {
    order: 2,
    name: "React js",
    src: "https://ucarecdn.com/b8742550-7225-4996-bd6f-8a58bab8280d/-/preview/522x510/"
  },
  {
    order: 3,
    name: "Angular js",
    src: "https://ucarecdn.com/2586b56f-bf1a-480a-8081-e4deeefb3076/-/preview/522x510/"
  },
  {
    order: 4,
    name: "Nuxt js",
    src: "https://ucarecdn.com/a0f1f442-a860-4f14-8f4c-b8bb0eef09db/-/preview/646x600/"
  },
  {
    order: 5,
    name: "Next js",
    src: "https://ucarecdn.com/fd50beb8-df6d-4b49-a8f1-a1ecdad487c4/-/preview/646x600/"
  },
  {
    order: 6,
    name: "jQuery",
    src: "https://ucarecdn.com/bc77d997-7124-4b92-b991-ed954acdfc7a/-/preview/498x468/"
  },
  {
    order: 7,
    name: "SASS",
    src: "https://ucarecdn.com/6bdf3ca8-b40f-449c-8c68-9509b1367d47/-/preview/498x468/"
  },
  {
    order: 8,
    name: "Bootstrap",
    src: "https://ucarecdn.com/f3ba5627-2042-4324-926b-71af5e3fc091/-/preview/498x468/"
  },
  {
    order: 9,
    name: "Element UI",
    src: "https://ucarecdn.com/ea123709-f7f3-4ac2-a85d-0d8ca43bccac/-/preview/518x502/"
  },
  {
    order: 10,
    name: "Material UI",
    src: "https://ucarecdn.com/e0841552-ec10-4a0e-ad20-b571913a5155/-/preview/518x502/"
  },
  {
    order: 11,
    name: "Laravel",
    src: "https://ucarecdn.com/0739dae4-0418-4b4d-8160-4bfc873cf791/-/preview/518x502/"
  },
  {
    order: 12,
    name: "Codeigniter",
    src: "https://ucarecdn.com/b2f8cbca-23ef-43a4-87e8-f95a99f26f3e/-/preview/518x502/"
  },
  {
    order: 13,
    name: "Node js",
    src: "https://ucarecdn.com/682e68c7-23fa-4518-a20a-0ae436debd7a/-/preview/518x502/"
  },
  {
    order: 14,
    name: "Express js",
    src: "https://ucarecdn.com/754cff65-34c4-47db-8ec2-f20124529832/-/preview/518x502/"
  },
  {
    order: 15,
    name: "Jest",
    src: "https://ucarecdn.com/86def076-c793-4df4-b687-aeaa669c5eb2/-/preview/518x502/"
  },
];

const spareItSkillTechstackData = [
  {
    order: 1,
    name: "Git",
    src: "https://ucarecdn.com/1abde576-d5c3-4e9b-a721-8b1a0fd6f946/-/preview/518x502/"
  },
  {
    order: 2,
    name: "Docker",
    src: "https://ucarecdn.com/f15b28e8-8670-4f35-9687-1b22472923c5/-/preview/518x502/"
  },
  {
    order: 3,
    name: "API Development",
    src: "https://ucarecdn.com/f73c6a52-b2d4-4ede-a058-1195a4bfc282/-/preview/518x502/"
  },
  {
    order: 4,
    name: "Jenkins",
    src: "https://ucarecdn.com/a8957a79-ff69-4b57-b529-354f04e766b8/-/preview/518x502/"
  },
  {
    order: 5,
    name: "Office Tools",
    src: "https://ucarecdn.com/23556a66-fd51-4764-ac05-156542dc0d0a/-/preview/518x502/"
  },
];

const spareItSkillMultimediaData = [
  {
    order: 1,
    name: "Photoshop",
    src: "https://ucarecdn.com/297ee5f1-0641-45ca-b02b-df9da8488fbd/-/preview/518x502/"
  },
  {
    order: 2,
    name: "Premiere",
    src: "https://ucarecdn.com/f49abc70-3d91-422c-89d9-6ac8f08be2cf/-/preview/518x502/"
  },
  {
    order: 3,
    name: "After Effects",
    src: "https://ucarecdn.com/257ce09b-8242-480f-8d0e-66dc8abc9468/-/preview/518x502/"
  },
  {
    order: 4,
    name: "Figma",
    src: "https://ucarecdn.com/3a339bb2-9802-4e08-9cfe-ff46a1d0adc9/-/preview/518x502/"
  },
  {
    order: 5,
    name: "Canva",
    src: "https://ucarecdn.com/24b3c6a1-d41a-4fa1-9671-f1fb832026f1/-/preview/602x590/"
  },
];