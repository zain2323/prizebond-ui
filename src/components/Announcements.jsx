import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import CustomButton from './utils/CustomButton';
import { useApi } from "../contexts/ApiProvider"
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        h4: {
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600
        },
        h5: {
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600
        }
    }
  });

export default function Announcements() {
    const api = useApi();
    const [results, setResults] = React.useState([])

    async function fetchLatestListingResults() {
        const response = await api.get("/winners");
        setResults(response.ok ? response.body : [])
    }

    React.useEffect(() => {
        fetchLatestListingResults()
    }, [api])

    return (
        <Carousel>
            {
                results.map((result, i) => {
                    const item = {
                        name: `Result of Rs.${result.denomination.price} prize bond announced on ${new Date(result.draw_date.date).toDateString()}`,
                        first: `1st Prize: ${result.first}`,
                        second: `2nd Prize: ${result.second.map((el, index) => " " + el)}`

                    }
                    return <Item key={i} item={item} />
                })
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Container maxWidth="false" disableGutters>
        <Paper
            elevation={10}
            sx={{
                width: '100%',
                ml: 0,
                pl: 0,
                background: "rgb(97,97,97)",
                background: "linear-gradient(90deg, rgba(97,97,97,1) 10%, rgba(38,40,41,1) 100%)" 
            }}
        >
            <Container>
                <Typography theme={theme} component={'div'} sx={{ p: 3 }} variant="h4" color="white">{props.item.name}</Typography>
                <Typography theme={theme} component={'div'} sx={{ p: 3 }} variant="h5" color="white">{props.item.first}</Typography>
                <Typography theme={theme} component={'div'} sx={{ p: 3 }} variant="h5" color="white">{props.item.second}</Typography>
                <CustomButton size="large" color="secondary" variant="outlined">
                    View Now
                </CustomButton>
            </Container>
        </Paper>
        </Container>
    )
}
