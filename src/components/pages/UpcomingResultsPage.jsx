import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { motion } from "framer-motion";

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Serial #', width: 100 },
  { field: 'denomination', headerName: 'Denomination', width: 190 },
  { field: 'drawNo', headerName: 'Draw #', width: 150 },
  { field: 'date', headerName: 'Date', width: 250 },
  { field: 'day', headerName: 'Day', width: 190 },
  { field: 'city', headerName: 'City', width: 190 },
];

const rows = [
  { id: 1, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 2, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 3, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 4, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 5, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 6, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 7, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 8, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 9, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
  { id: 10, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad" },
];

export default function UpcomingResultsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Container maxWidth="lg" sx={{
        mt: 2,
        mb: 2
      }}>
        <Typography component={'div'} variant="h4" sx={{
          pl: 5, pr: 5, pt: 3, pb: 5
        }}>
          Prize bond schedule by National Savings 2022-23
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Container>
    </motion.div>
  );
}
