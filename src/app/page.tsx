import * as React from 'react';
import Box from '@mui/material/Box';

import Navbar from "../components/navbar"
import Main from "../components/main"
import About from "../components/about"
import Quote from "../components/quote"
import Skill from "../components/skill"

export default function Home() {
  return (
    <Box>
      <Navbar />
      <main>
        <Main />
        <About />
        <Quote />
        <Skill />
      </main>
    </Box>
  );
}
