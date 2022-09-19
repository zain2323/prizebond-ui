import * as React from 'react';
import {
    Box, Container, Paper, InputLabel, MenuItem,
    FormControl, Select, Stack, TextField, Button, Typography,
    Link
} from '@mui/material';
import Center from "../utils/Center";
import {Link as RouterLink} from 'react-router-dom';


export default function AddBondSeriesPage() {
    const [denomination, setDenomination] = React.useState('');

    const handleDenominationChange = (event) => {
        setDenomination(event.target.value);
    };

    const [serials, setSerials] = React.useState('');

    const handleSerialChange = (event) => {
        setSerials(event.target.value);
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 460,
                        marginTop: 7,
                        marginBottom: 8,
                    },
                }}
            >
                <Paper elevation={10}>
                    <Stack>
                    <Center><Typography mb={0} mt={5} variant="h4" gutterBottom>Add your bonds!</Typography></Center>
                        <FormControl
                            sx={{ minWidth: 120, m:5, mb:4 }}>
                            <InputLabel id="denomiantion-label">Denomination</InputLabel>
                            <Select
                                labelId="denomiantion-label"
                                value={denomination}
                                onChange={handleDenominationChange}
                                label="Denomination"
                            >
                                <MenuItem value="">
                                    <em>Select denomination</em>
                                </MenuItem>
                                <MenuItem value={100}>Rs.100</MenuItem>
                                <MenuItem value={200}>Rs.200</MenuItem>
                                <MenuItem value={750}>Rs.750</MenuItem>
                                <MenuItem value={1500}>Rs.1500</MenuItem>
                            </Select>
                        </FormControl>
                        <Stack direction="row">
                            <TextField sx={{mt:2, mb:4, ml:5, mr: 5 }} id="start" placeholder="123456" label="Start" variant="outlined" />
                            <TextField sx={{mt:2, mb:4, ml:5, mr: 5 }} id="end" placeholder="123459" label="End" variant="outlined" />
                        </Stack>
            
                        <Button sx={{mt:2, mb:4, ml:5, mr: 5 }} variant="contained">
                            Add
                        </Button>
                        <Center>
                            <Typography color="text.secondary" variant="subtitle1" gutterBottom>Want to add bonds? <Link component={RouterLink} to="/add-bonds" underline="hover">{'Add bonds'}</Link></Typography> 
                        </Center>
                    </Stack>

                </Paper>
            </Box>
        </Container>
    );
}
