import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
  { id: 1, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 2, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 3, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 4, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 5, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 6, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 7, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 8, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 9, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
  { id: 10, denomination: 'Rs.100/-', drawNo: '17', date: "15 February, 2022", day: "Tuesday", city: "Hyderabad"},
];

export default function UpcomingResultsPage() {
  return (
    <Container maxWidth="lg" sx={{
        mt:2,
        mb:2
    }}>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    </Container>
  );
}
