import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Rs.100/-', "Rs.700,000", "Rs.200,000", "Rs.1,000"),
  createData('Rs.200/-', "Rs.750,000", "Rs.250,000", "Rs.1,250"),
  createData('Rs.750/-', "Rs.1,500,000", "Rs.500,000", "Rs.9,300"),
  createData('Rs.1500/-', "Rs.3,000,000", "Rs.1,000,000", "Rs.18,500"),
  createData('Rs.7500/-', "Rs.15,000,000", "Rs.1,000,000", "Rs.18,500"),
  createData('Rs.15,000/-', "Rs.30,000,000", "Rs.10,000,000", "Rs.185,000"),
  createData('Rs.25.000/-', "Rs.50,000,000", "Rs.15,000,000", "Rs.312,000"),
  createData('Rs.40,000/-', "Rs.75,000,000", "Rs.25,000,000", "Rs.500,000"),
];

export default function DrawsInfoPage() {
  return (
    <Container sx={{
        mt: 2,
        mb:2    
    }}>
    <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 5,
              width: "100%",
              height: 470,
              borderRadius: 2
            },
          }}
        >
          <Paper elevation={10}>
          <Typography variant="h4" sx={{
            pl: 5, pr:5, pt:3
          }}>
          Prize bond details
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

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Denomination (Rs)</StyledTableCell>
                <StyledTableCell>1st prize&nbsp;(Rs)</StyledTableCell>
                <StyledTableCell>2nd Prize&nbsp;(Rs)</StyledTableCell>
                <StyledTableCell>3rd prize&nbsp;(Rs)</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
  );
}
