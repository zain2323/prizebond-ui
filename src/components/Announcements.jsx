import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button,Box, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import CustomButton from './utils/CustomButton';

export default function Announcements(props)
{
    var items = [
        {
            name: "Rs.1500 Prize Bond Peshawar Updated on Aug 15,2022",
            description: "First:-251424 Second:028377 169997 537859 "
        },
        {
            name: "Rs.750 Prize Bond Peshawar Updated on Aug 15,2022",
            description: "First:-251424 Second:028377 169997 537859"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (

        <Paper
            elevation={10}
            sx={{
            height: 400,
            width: '100%',
            ml: 0,
            pl:0,
            bgcolor: "#1976d2"
            }}
        >
            <Container maxWidth="sm" >
                <Typography sx={{p:5}}variant="h4" color="white">{props.item.name}</Typography>
                <Typography sx={{p:5}} variant="button" color="white">{props.item.description}</Typography>
                <CustomButton size="large" color="secondary" variant="outlined">
                        View Now
                </CustomButton>
            </Container>   
        </Paper>
    )   
}
