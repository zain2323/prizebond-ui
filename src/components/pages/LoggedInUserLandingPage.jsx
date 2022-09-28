import React from "react"
import { Typography, Container } from '@mui/material';
import Center from "../utils/Center"
import { useApi } from "../../contexts/ApiProvider";
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import ProgressBar from "../utils/ProgessBar"
import { useLoadingBar } from '../../contexts/LoadingBarProvider'
import AlertMessage from "../utils/AlertMessage"
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function LoggedInUserLandingPage() {
    const api = useApi();
    const [bonds, setBonds] = React.useState([])

    async function fetchBonds() {
        const response = await api.get("/user/bonds")
        setBonds(response.ok ? response.body : [])
    }

    React.useEffect(() => {
        fetchBonds()
    }, [api])

    return (
        <>
            <ProgressBar />
            <AlertMessage />
            <Container maxWidth="lg">
                <Center>
                    <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
                        Your Bonds
                    </Typography>
                </Center>
                <Grid
                    data={bonds.map(bond => {
                        return [bond.price.price, bond.serial]
                    })}
                    columns={['Denomination', 'Serial Number']}
                    search={true}
                    sort={true}
                    pagination={true} />
            </Container>
        </>
    )
}