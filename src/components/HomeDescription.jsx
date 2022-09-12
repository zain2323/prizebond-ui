import * as React from 'react';
import {Paper, Typography, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
    
export default function HomeDescription() {
    return (
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 5,
              width: "100%",
              height: 420,
              borderRadius: 2
            },
          }}
        >
          <Paper elevation={10}>
          <Typography variant="h4" sx={{
            pl: 5, pr:5, pt:3
          }}>
          Fast bond
          </Typography>
          <Typography variant="subtitle1" sx={{
            pl: 5, pr:5, pt: 3, pb: 5
          }}>
          Pakistan Prize Bond .Com by National Savings Center is an authentic source of information pertaining to Pakistani Prize Bonds. These are one of the legitimate investments whose demand is increasing day by day just like Pakistan Savings Certificates. 
Pakistan Prize Bond .Com by National Savings Center features you up with up-to-date Pakistani Prize Bond Denominations and you can even get Pakistan Prize Bond Schedule in printable form along with it as per filters e.g. venue, date, serial numbers etc. 
It is a complete information management system which handles all queries about Pakistani Prize Bonds comprising history too of past Pakistani Prize Bond Results. The approach followed by Pakistan Prize Bond .Com from National Savings Center is to provide all sorts of information even of Pakistan Savings Certificates comprising Defense Saving Certificates (DSC), Special Saving Certificates Registered (SSCR), Regular Income Certificates (RIC), Bahbood Saving Certificates (BSC), Savings Account (SA), Pensioner’s Benefit Account (PBA) and Special Savings Account (SSA). 
We also feature in depth information and metrics from Pakistan Finance Ministry, Pakistan Investment board, Pakistan Economy furnishing almost for you a complete Pakistan Business Directory which portfolios top business professionals and all types of business entities of Pakistan. This is the exquisiteness of Pakistan Prize Bond .Com from National Savings Center which distinguishes itself from other websites. So stay intact with Pakistan Prize Bond .Com offered by National Savings Center for all pertaining to Pakistani Prize Bonds and Pakistani Savings Certificates.
          </Typography>
          </Paper>
        </Box>
  );
}
