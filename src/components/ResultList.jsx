import * as React from 'react';
import { Container } from "@mui/material"
import ResultCard from './ResultCard';
import Grid from '@mui/material/Unstable_Grid2';
import {useApi} from "../contexts/ApiProvider"


function getCards(results) {
  const cards = []
  for (let i = 0; i < results.length; i++) {
    cards.push((
      <Grid xs={12} sm={6} lg={3} sx={{mb:2}}>
        <ResultCard
          heading={`Rs.${results[i].denomination} denomination list`}
          first={results[i].first}
          second={results[i].second}
        />
      </Grid>
    ))
  }
  return cards
}


export default function ResultList() {
  const api = useApi();
  const [results, setResults] = React.useState([])

  async function fetchLatestListingResults() {
    const response = await api.get("/winners");
    setResults(response.ok ? response.body : [])
  }

  React.useEffect(() => {
    fetchLatestListingResults()
  }, [api])
  
  const cards = getCards(results)

  return (
    <Container maxWidth="lg">
      <Grid container>
        {cards}
      </Grid>
    </Container>
  );
}
