import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function UpcomingSchedule() {
  return (
    <Container maxWidth="sm">
         <Box
            sx={{
                '& > :not(style)': {
                m: 1,
                width: 400,
                height: 410,
                },
            }}>
            <Paper elevation={10}>
                <Typography variant="h5" sx={{ml: 7, pt:2}}>
                Upcoming schedule 2022
                </Typography>
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
                <Button sx={{ml:17, mt:1}} variant="outlined">View all</Button>
                </List>
            </Paper>
        </Box>
    </Container>
  );
}
