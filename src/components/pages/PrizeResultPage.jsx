import React from "react";
import { useLocation } from "react-router-dom";
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AlertMessage from "../utils/AlertMessage"
import ProgressBar from "../utils/ProgessBar"
import {motion} from "framer-motion"

export default function PrizeResult() {
    const location = useLocation();
    const bonds = location.state.response
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <ProgressBar />
            <AlertMessage />
            <Container>
                <Typography component={'div'} variant="h4" sx={{ mt: 2, mb: 2 }}>
                    Your Results
                </Typography>
                <Grid
                    data={bonds.length >= 1 ? bonds.map(bond => {
                        return [bond.denomination, bond.serial, bond.draw_date, bond.position, bond.prize, bond.draw_num, bond.location]
                    }): []}
                    autoWidth={false}
                    columns={['Denomination', 'Serial', 'Date', 'Position', 'Prize', 'Draw no', 'City']}
                    sort={true}
                    pagination={{
                        enabled: true,
                        limit: 10,
                    }} />
            </Container>
        </motion.div>
    )
}