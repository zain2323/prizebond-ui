import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button,Box, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import CustomButton from './utils/CustomButton';
import {useApi} from "../contexts/ApiProvider"


export default function Announcements()
{
    const api = useApi();
    const [results, setResults] = React.useState([])
  
    async function fetchLatestListingResults() {
      const response = await api.get("/winners");
      setResults(response.ok ? response.body : [])
    }
  
    React.useEffect(() => {
      fetchLatestListingResults()
    }, [api])

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
                results.map( (result, i) => {
                    const item = {
                        name: `Result of Rs.${result.denomination} prize bond announced on ${new Date(result.draw_date).toDateString()}`,
                        first: `1st Prize: ${result.first}`,
                        second: `2nd Prize: ${result.second.map((el, index) => " " + el)}`

                    }
                    return <Item key={i} item={item}/>
                })
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
            <Container>
                <Typography sx={{p:5}} variant="h4" color="white">{props.item.name}</Typography>
                <Typography sx={{p:5}} variant="h5" color="white">{props.item.first}</Typography>
                <Typography sx={{p:5}} variant="h5" color="white">{props.item.second}</Typography>
                <CustomButton size="large" color="secondary" variant="outlined">
                        View Now
                </CustomButton>
            </Container>   
        </Paper>
    )   
}
