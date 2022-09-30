import * as React from 'react';
import { Container } from "@mui/material"
import ResultCard from './ResultCard';
import Grid from '@mui/material/Unstable_Grid2';
import {useApi} from "../contexts/ApiProvider"


function getCards(results) {
  const cards = []
  for (let i = 0; i < results.length; i++) {
    cards.push((
        <ResultCard
          key={i}
          heading={`Rs.${results[i].denomination.price} denomination list`}
          first={results[i].first}
          second={results[i].second}
          to={`/results?denomination=${results[i].denomination.id}&date=${results[i].draw_date.id}`}
        />
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