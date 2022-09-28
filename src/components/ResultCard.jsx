import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2979ff',
      darker: '#2962ff',
    },
  },
});

export default function ResultCard({ heading, first, second }) {
  return (
    <Card sx={{ minWidth: 275, mb: 3, mr: 2, mt: 2 }}>
      <Container maxWidth="sm">
        <CardContent>
          <Typography component={'div'} sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            {heading}
          </Typography>
          <Typography component={'div'} variant="h6">
            1st Prize
          </Typography>
          <Typography component={'div'} sx={{ mb: 1.5 }} color="text.secondary">
            {first}
          </Typography>
          <Typography component={'div'} variant="h6">
            2nd Prize
          </Typography>
          <Typography component={'div'} color="text.secondary">
            {second.map((el, index) => index < second.length -1 ? el + ", " : el)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button theme={theme} size="small" color="primary" variant="outlined">View more</Button>
        </CardActions>
      </Container>
    </Card>
  );
}
