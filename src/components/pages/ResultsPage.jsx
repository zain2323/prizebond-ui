import React from "react"
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import {Container, Typography} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function ResultsPage() {
    return (
        <Container>
            <Typography variant="h4" sx={{mt: 2, mb: 2}}>
                Search your results
            </Typography>
            <Grid
                data={[
                    ['750', '004208', '17-01-2022', "first", '12', 'Peshawar'],
                    ['750', '511294', '17-01-2022', "second", '12','Peshawar'],
                    ['750', '549996', '17-01-2022', "second", '12','Peshawar'],
                    ['750', '904546', '17-01-2022', "second", '12','Peshawar'],
                    ['100', '983274', '15-01-2022', "first", '12','Hyderabad'],
                    ['100', '074566', '15-01-2022', "second", '12','Hyderabad'],
                    ['100', '259751', '15-01-2022', "second", '12','Hyderabad'],
                    ['100', '885455', '15-01-2022', "second", '12','Hyderabad'],
                    ['750', '004208', '17-01-2022', "first", '12', 'Peshawar'],
                    ['750', '511294', '17-01-2022', "second", '12','Peshawar'],
                    ['750', '549996', '17-01-2022', "second", '12','Peshawar'],
                    ['750', '904546', '17-01-2022', "second", '12','Peshawar'],
                    ['100', '983274', '15-01-2022', "first", '12','Hyderabad'],
                    ['100', '074566', '15-01-2022', "second", '12','Hyderabad'],
                    ['100', '259751', '15-01-2022', "second", '12','Hyderabad'],
                    ['100', '885455', '15-01-2022', "second", '12','Hyderabad'],
                ]}
                autoWidth={false}
                columns={['Denomination', 'Serial', 'Date', 'Position', 'Draw no', 'City']}
                search={true}
                sort={true}
                pagination={{
                enabled: true,
                limit: 10,
            }}/>
    </Container>
    )
}