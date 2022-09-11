import * as React from 'react';
import {Stack, Container} from "@mui/material"
import ResultCard from './ResultCard';

const first = ["123456", "123456", "123456", "123456"]
const second = [["12347", "123458", "123459"],["12347", "123458", "123459"],
                ["12347", "123458", "123459"],["12347", "123458", "123459"]]

function getCards() {
    const cards = []
    for (let i = 0; i < first.length; i++) {
        cards.push((
            <ResultCard
            heading={"Rs.1500 denomination list"}
            first={first[i]}
            second={second[i]}
            />
        ))
    }
    return cards
}

const cards = getCards()

export default function BasicCard() {
  return (
    <Container maxWidth="lg">
        <Stack direction="row">
          {cards}
        </Stack>
    </Container>
  );
}
