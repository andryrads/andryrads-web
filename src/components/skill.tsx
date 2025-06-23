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
        // const data = await fetchSoftSkills();
        // setSoftSkillData(data);
        setSoftSkillData(spareSoftSkillData);
      } catch(err:any) {
        setErrorSoftSkill(err.message);
      } finally {
        setLoadingSoftSkill(false);
      }
    };
    const loadHardSkills = async() => {
      try {
        // const data = await fetchHardSkills();
        // setHardSkillData(data);
        setHardSkillData(spareHardSkillData);
      } catch(err:any) {
        setErrorHardSkill(err.message);
      } finally {
        setLoadingHardSkill(false);
      }
    };
    
    const loadItSkillsLanguage = async() => {
      try {
        // const data = await fetchItSkillsLanguage();
        // setItSkillLanguageData(data);
        setItSkillLanguageData(spareItSkillLanguageData);
      } catch(err:any) {
        setErrorItSkillLanguageData(err.message);
      }
    };
    const loadItSkillsFwlb = async() => {
      try {
        // const data = await fetchItSkillsFwlb();
        // setItSkillFwlbData(data);
        setItSkillFwlbData(spareItSkillFwlbData);
      } catch(err:any) {
        setErrorItSkillFwlbData(err.message);
      }
    };
    const loadItSkillsTechstack = async() => {
      try {
        // const data = await fetchItSkillsTechstack();
        // setItSkillTechstackData(data);
        setItSkillTechstackData(spareItSkillTechstackData);
      } catch(err:any) {
        setErrorItSkillTechstackData(err.message);
      }
    };
    const loadItSkillsMultimedia = async() => {
      try {
        // const data = await fetchItSkillsMultimedia();
        // setItSkillMultimediaData(data);
        setItSkillMultimediaData(spareItSkillMultimediaData);
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
              {softSkillData.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: {
                          textAlign: {
                            xs: 'center',
                            sm: 'left',
                          },
                        },
                      }}
                    />
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
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: {
                          textAlign: {
                            xs: 'center',
                            sm: 'left',
                          },
                        },
                      }}
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          )}
        </div>

        <div className={styles.itSkill}>
          <Typography variant="h6" className={styles.title}>
            IT SKILL
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
    name: "Communication"
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
    name: "Machine Learning"
  },
  {
    name: "Deep Learning"
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
    name: "Fast Typing (80 WPM)"
  },
];

const spareItSkillLanguageData = [
  {
    order: 1,
    name: "Javascript",
    src: "https://ucarecdn.com/a893ccd6-4831-4eda-b9a1-0783776a86ad/-/preview/428x424/"
  },
  {
    order: 2,
    name: "Typescript",
    src: "https://ucarecdn.com/04af98e2-a41b-484c-93e8-0fde5759f732/-/preview/410x424/"
  },
  {
    order: 3,
    name: "PHP",
    src: "https://ucarecdn.com/0b163d69-4d26-412c-acad-590234abf8ff/-/preview/450x398/"
  },
  {
    order: 4,
    name: "Python",
    src: "https://ucarecdn.com/cbe1b229-0f19-432f-90aa-5bcfbb6ff884/-/preview/450x398/"
  },
  {
    order: 5,
    name: "C#",
    src: "https://ucarecdn.com/36af0e68-d2a7-4e9e-8359-8b3769b936af/-/preview/546x544/"
  },
  {
    order: 6,
    name: "Pinescript",
    src: "https://ucarecdn.com/f3338e0b-5a94-4660-b7b5-ea0f7d53e40c/-/preview/546x544/"
  },
  {
    order: 7,
    name: "HTML",
    src: "https://ucarecdn.com/8563a21a-9b2b-46bc-9744-59a9ff61a4fd/-/preview/522x484/"
  },
  {
    order: 8,
    name: "CSS",
    src: "https://ucarecdn.com/df57940c-a856-4163-b599-e57d86dc38f5/-/preview/522x484/"
  },
  {
    order: 9,
    name: "SQL",
    src: "https://ucarecdn.com/b7dde2e6-3bfa-4649-bc0c-205dab06aae3/-/preview/522x510/"
  },
  {
    order: 10,
    name: "NoSQL",
    src: "https://ucarecdn.com/da20d646-2c7f-424c-a5aa-39b1a463393c/-/preview/522x510/"
  },
];

const spareItSkillFwlbData = [
  {
    order: 1,
    name: "Vue js",
    src: "https://ucarecdn.com/88b8d493-bcff-4d70-bb99-65986571a21f/-/preview/522x510/"
  },
  {
    order: 2,
    name: "React js",
    src: "https://ucarecdn.com/2b89fd53-11af-4453-af50-abf91b588c35/-/preview/522x510/"
  },
  {
    order: 3,
    name: "Angular js",
    src: "https://ucarecdn.com/12460e07-b173-4064-9fbb-c47ab5844a76/-/preview/522x510/"
  },
  {
    order: 4,
    name: "Nuxt js",
    src: "https://ucarecdn.com/4c741ed7-4e43-47b4-b66b-63a400338f73/-/preview/646x600/"
  },
  {
    order: 5,
    name: "Next js",
    src: "https://ucarecdn.com/c41a5ce2-c262-476c-ba8b-93f13453e555/-/preview/646x600/"
  },
  {
    order: 6,
    name: "jQuery",
    src: "https://ucarecdn.com/c8b7b0b0-f4bd-4882-b700-5d476e93d6c2/-/preview/498x468/"
  },
  {
    order: 7,
    name: "SASS",
    src: "https://ucarecdn.com/1fd0ca36-f0a9-4e63-bd0c-adbc1fd7591d/-/preview/498x468/"
  },
  {
    order: 8,
    name: "Bootstrap",
    src: "https://ucarecdn.com/598871ab-bb56-403a-99d5-522243ec8f64/-/preview/498x468/"
  },
  {
    order: 9,
    name: "Tailwind",
    src: "https://ucarecdn.com/74e3a5d1-40b6-4fab-aa75-a0b51a807231/-/preview/351x351/"
  },
  {
    order: 10,
    name: "Wordpress",
    src: "https://ucarecdn.com/abff4df3-55cf-48a1-a9dc-8587e103a69f/-/preview/1000x1000/"
  },
  {
    order: 11,
    name: "Element UI",
    src: "https://ucarecdn.com/03e250a3-23b6-40bb-bb02-a696b17c89e8/-/preview/518x502/"
  },
  {
    order: 12,
    name: "Material UI",
    src: "https://ucarecdn.com/6b796e20-e14e-4f2d-8ccb-61259f565c83/-/preview/518x502/"
  },
  {
    order: 13,
    name: "Node js",
    src: "https://ucarecdn.com/482e130f-9898-46a0-975d-fbd346cb30b0/-/preview/518x502/"
  },
  {
    order: 14,
    name: "Express js",
    src: "https://ucarecdn.com/5f8a849b-f43b-4bac-80d6-ed99fd0ddf05/-/preview/518x502/"
  },
  {
    order: 15,
    name: "Jest",
    src: "https://ucarecdn.com/0a4b668a-659b-4925-b4cf-d4c0d1c0413b/-/preview/518x502/"
  },
  {
    order: 16,
    name: "Laravel",
    src: "https://ucarecdn.com/ff9e7f61-da3f-46a3-9abd-ae867cf1012a/-/preview/518x502/"
  },
  {
    order: 17,
    name: "Codeigniter",
    src: "https://ucarecdn.com/55982822-c5f9-4a63-be2c-f2256ad2495d/-/preview/518x502/"
  },
  {
    order: 18,
    name: "Numpy",
    src: "https://ucarecdn.com/e68c67fb-aa93-4d7e-8a97-c290f313ae9c/-/preview/256x256/"
  },
  {
    order: 19,
    name: "Pandas",
    src: "https://ucarecdn.com/90311f5f-4b14-4184-9e7c-8a5d41439f57/-/preview/512x512/"
  },
  {
    order: 20,
    name: "NLTK",
    src: "https://ucarecdn.com/e9a79176-c2a7-48e1-9526-0e2724c3bc3e/-/preview/592x644/"
  },
  {
    order: 21,
    name: "Scikit Learn",
    src: "https://ucarecdn.com/89e3bee3-fa23-45ca-a350-0fd99cb7c7bc/-/preview/768x480/"
  },
  {
    order: 22,
    name: "TensorFlow",
    src: "https://ucarecdn.com/385393b2-8f3f-4b24-a8bc-756c5831c889/-/preview/932x1000/"
  },
  {
    order: 23,
    name: "FastAPI",
    src: "https://ucarecdn.com/b35109bc-be55-4e26-beb1-c44ceaf2870d/-/preview/1000x1000/"
  },
];

const spareItSkillTechstackData = [
  {
    order: 1,
    name: "Git",
    src: "https://ucarecdn.com/f1a9222a-42dd-4ff9-abe4-643e2ab83991/-/preview/518x502/"
  },
  {
    order: 2,
    name: "Docker",
    src: "https://ucarecdn.com/658fe379-a2b5-4986-b813-8764f5c9fe7b/-/preview/518x502/"
  },
  {
    order: 3,
    name: "API Dev",
    src: "https://ucarecdn.com/82b10812-096a-41c1-8a68-430dfb6b4708/-/preview/518x502/"
  },
  {
    order: 4,
    name: "Jenkins",
    src: "https://ucarecdn.com/0d36181d-d753-444a-b374-6895455ea73c/-/preview/518x502/"
  },
  {
    order: 5,
    name: "Office Tools",
    src: "https://ucarecdn.com/25e8cdf1-621c-4381-96c4-cfb40de1e650/-/preview/518x502/"
  },
  {
    order: 6,
    name: "RWD",
    src: "https://ucarecdn.com/05705d01-ad93-454a-a644-35010bf8bb38/-/preview/700x700/"
  },
  {
    order: 7,
    name: "Bash Script",
    src: "https://ucarecdn.com/2cabc848-e078-4581-b6b3-44078dc1db2c/-/preview/700x700/"
  },
  {
    order: 8,
    name: "State Mgmt",
    src: "https://ucarecdn.com/be1b5770-af78-4760-aa8f-32111037f395/-/preview/700x700/"
  },
];

const spareItSkillMultimediaData = [
  {
    order: 1,
    name: "Photoshop",
    src: "https://ucarecdn.com/d1dedda2-fb3f-420a-aee3-42a0808d1e48/-/preview/518x502/"
  },
  {
    order: 2,
    name: "Premiere",
    src: "https://ucarecdn.com/778482e2-0820-4dac-a1c7-42cfbad75fcc/-/preview/518x502/"
  },
  {
    order: 3,
    name: "After Effects",
    src: "https://ucarecdn.com/ba5e5bac-57a3-4f67-88bb-2fb72bea5625/-/preview/518x502/"
  },
  {
    order: 4,
    name: "Figma",
    src: "https://ucarecdn.com/5934998e-3dc9-44da-bbec-94d1ab16d6b9/-/preview/518x502/"
  },
  {
    order: 5,
    name: "Canva",
    src: "https://ucarecdn.com/482d2326-9f10-4076-b648-9c0c40e2dcac/-/preview/602x590/"
  },
];