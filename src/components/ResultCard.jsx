import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ResultCard({ heading, first, second }) {
  return (
    <Card sx={{ minWidth: 275, mb: 3, mr: 2, mt: 2 }}>
      <Container maxWidth="sm">
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            {heading}
          </Typography>
          <Typography variant="h6" component="div">
            1st Prize
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {first}
          </Typography>
          <Typography variant="h6" component="div">
            2nd Prize
          </Typography>
          <Typography color="text.secondary">
            {second.map((el, index) => index < second.length -1 ? el + ", " : el)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">View more</Button>
        </CardActions>
      </Container>
    </Card>
  );
}
