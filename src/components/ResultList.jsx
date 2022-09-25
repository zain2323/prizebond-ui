import * as React from 'react';
import { Stack, Container } from "@mui/material"
import ResultCard from './ResultCard';
import Grid from '@mui/material/Unstable_Grid2';


const first = ["123456", "123456", "123456", "123456"]
const second = [["12347", "123458", "123459"], ["12347", "123458", "123459"],
["12347", "123458", "123459"], ["12347", "123458", "123459"]]

function getCards() {
  const cards = []
  for (let i = 0; i < first.length; i++) {
    cards.push((
      <Grid xs={12} sm={6} lg={3} sx={{mb:2}}>
        <ResultCard
          heading={"Rs.1500 denomination list"}
          first={first[i]}
          second={second[i]}
        />
      </Grid>
    ))
  }
  return cards
}

const cards = getCards()

export default function BasicCard() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        {cards}
      </Grid>
    </Container>
  );
}
