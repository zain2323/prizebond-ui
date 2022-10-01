import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Paper from "@mui/material/Paper";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Center from "./utils/Center"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2979ff',
        darker: '#2962ff',
      },
    },
  });

export default function UpcomingSchedule() {
  return (
    <Grid container sx={{justifyContent:"center"}}>
            <Paper elevation={10} sx={{pr:5, pl:5}}>
                <Center>
                <Typography component={'div'} variant="h5" sx={{ml: 5, pt:2, mr: 5}}>
                Upcoming schedule 2022
                </Typography>
                </Center>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Divider />
                <ListItem button>
                    <ListItemAvatar>
                    <Avatar>
                        <CalendarMonthIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rs.200 at Karachi" secondary="Jan 9, 2022" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemAvatar>
                    <Avatar>
                        <CalendarMonthIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rs.750 at Faisalabad" secondary="June 7, 2022" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemAvatar>
                    <Avatar>
                        <CalendarMonthIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rs.100 at Islamabad" secondary="June 7, 2022" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemAvatar>
                    <Avatar>
                        <CalendarMonthIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rs.1500 at Lahore" secondary="July 20, 2022" />
                </ListItem>
                <Button theme={theme} color="primary" sx={{ml:15, mt:1}} variant="outlined">View all</Button>
                </List>
            </Paper>
        </Grid>
  );
}
