import * as React from 'react';
import Box from '@mui/material/Box';

import Navbar from "../components/navbar"
import Main from "../components/main"

export default function Home() {
  return (
    <Box>
      <Navbar />
      <main>
        <Main />
      </main>
    </Box>
  );
}
