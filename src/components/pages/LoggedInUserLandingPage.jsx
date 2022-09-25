import React from "react"
import {Typography, Container} from '@mui/material';
import Center from "../utils/Center"

export default function LoggedInUserLandingPage() {
    return (
        <>
            <Container>
                <Center>
                    <Typography variant="h3">Your Bonds</Typography>
                </Center>
            </Container>
        </>
    )
}