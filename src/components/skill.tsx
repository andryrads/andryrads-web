import * as React from 'react';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./styles/skill.module.scss";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Skill() {
  return (
    <section id="skills">
      <div className={styles.container}>
        <div className={styles.skill}>
          <Typography variant="h6" className={styles.title}>
            SOFT SKILL
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Fast Learner" primaryTypographyProps={{ variant: "body2" }}  />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Detail Oriented" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Management & Planning" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Communication" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Problem Solving" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Teamwork" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
          </List>
        </div>

        <div className={styles.skill}>
          <Typography variant="h6" className={styles.title}>
            HARD SKILL
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Programming" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Data Analysis" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Graphic Design" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Multimedia" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Office & ERP" primaryTypographyProps={{ variant: "body2" }}/>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Digital Marketing" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Fast Typing (85 WPM)" primaryTypographyProps={{ variant: "body2" }} />
            </ListItem>
            <Divider component="li" />
          </List>
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
