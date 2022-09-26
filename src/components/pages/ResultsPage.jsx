import React from "react"
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import {Container, Typography} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useApi} from "../../contexts/ApiProvider";

export default function ResultsPage() {
    const api = useApi();
    const [bonds, setBonds] = React.useState([])

    async function fetchBonds() {
        const response = await api.get("/result")
        console.log(response.body)
        setBonds(response.ok ? response.body : [])
    }

    React.useEffect(() => {
        fetchBonds()
    }, [api])

    return (
        <Container>
            <Typography variant="h4" sx={{mt: 2, mb: 2}}>
                Search your results
            </Typography>
            <Grid
                data={bonds.map(bond => {
                    return [bond.denomination, bond.serial, bond.draw_date, bond.position, bond.prize, bond.draw_num, bond.location]
                })}
                autoWidth={false}
                columns={['Denomination', 'Serial', 'Date', 'Position', 'Prize', 'Draw no', 'City']}
                search={true}
                sort={true}
                pagination={{
                enabled: true,
                limit: 10,
            }}/>
    </Container>
    )
}