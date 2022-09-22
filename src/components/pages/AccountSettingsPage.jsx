import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Typography } from '@mui/material';
import { Grid as GridTable } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import { _ } from "gridjs-react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Center from "../utils/Center";
import { useUser } from '../../contexts/UserProvider'


export default function AccountSettingsPage() {
    const { user } = useUser()
    console.log("USER", user)
    const editButton = _(
        <>
            <a className="EditButton" onClick={()=>alert("clicked")}>
                Edit
            </a>
            <EditRoundedIcon />
        </>

    )
    
    
    const heading = _(
        <Typography variant="h6">Name</Typography>
    )
    const styles = {
        table: {
            border: 'none'
        },
    }

    return (
        <Container sx={{
            mt: 5,
            mb: 5
        }}>
            <Center>
                <Typography sx={{ mb: 5 }} variant="h3">General Account Settings</Typography>
            </Center>
            <GridTable
                style={styles}
                data={[
                    [_(<Typography variant="h6">Name</Typography>), _(<Typography variant="body1">{user.name}</Typography>), editButton],
                    [_(<Typography variant="h6">Email</Typography>), _(<Typography variant="body1">{user.email}</Typography>), editButton],
                    [_(<Typography variant="h6">Password</Typography>), _(<Typography variant="body1">**********</Typography>), editButton],
                    [_(<Typography variant="h6">Confirmed</Typography>), _(<Typography variant="body1">{user.confirmed ? "Confirmed": "Not Confirmed"}</Typography>), editButton],
                    [_(<Typography variant="h6">Registered At</Typography>), _(<Typography variant="body1">{new Date(user.registered_at).toDateString()}</Typography>), editButton]
                ]}

            />
        </Container>
    )
}