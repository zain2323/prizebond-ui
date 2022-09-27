import React from "react"
import { Typography, Container } from '@mui/material';
import Center from "../utils/Center"
import { useApi } from "../../contexts/ApiProvider";
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";

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