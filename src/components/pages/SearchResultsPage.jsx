import * as React from 'react';
import {
    Box, Container, Paper, InputLabel, MenuItem,
    FormControl, Select, Stack, TextField, Button, Typography,
    Link, Autocomplete
} from '@mui/material';
import Center from "../utils/Center";
import { Link as RouterLink } from 'react-router-dom';
import { useApi } from "../../contexts/ApiProvider";
import { SwipeRightAltTwoTone } from '@mui/icons-material';


export default function SearchResultsPage() {
    const api = useApi();
    const [denominations, setDenominations] = React.useState([])
    const [drawDate, setDrawDate] = React.useState([]);
    const [serials, setSerials] = React.useState(["All"])
    const [serial, setSerial] = React.useState(serials[0]);

    const [formData, setFormData] = React.useState({
        denomination: {
            value: "",
            error: false,
            errorMessage: ""
        },
        drawDate: {
            value: "",
            error: false,
            errorMessage: ""
        }
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: {
                    value: value,
                    error: false,
                    errorMessage: ""
                }
            }
        })
        if (name === "denomination") {
            fetchDrawDate(value)
            fetchSerials(value)
        }
    }

    async function fetchDenominations() {
        const response = await api.get("/denominations");
        setDenominations(response.ok ? response.body : null);
    }

    async function fetchDrawDate(price) {
        const denomination_id = getDenominationId(price);
        const response = await api.get(`/drawdate/${denomination_id}`);
        setDrawDate(response.ok ? response.body : null);
    }

    async function fetchSerials(price) {
        const denomination_id = getDenominationId(price);
        const response = await api.get(`/user/bonds/${denomination_id}`);
        const serials = ["All"].concat(response.body)
        setSerials(response.ok ? serials : ["All"]);
    }

    function getDenominationId(denomination) {
        for (let i = 0; i < denominations.length; i++) {
            if (denominations[i].price === denomination) {
                return denominations[i].id;
            }
        }
        return null;
    }

    React.useEffect(() => {
        fetchDenominations()
    }, [api])

    function handleSubmit() {
        const denomination = formData.denomination.value;
        const date = formData.drawDate.value;
        if (denomination && date && serial) {
            console.log("data submitted")
            console.log(denomination, date, serial.price ? serial.serial : serial)
        }
        else {
            console.log("Failed")
        }
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 510,
                        marginTop: 7,
                        marginBottom: 8,
                    },
                }}
            >
                <Paper elevation={10}>
                    <Stack>
                        <Center><Typography mb={0} mt={5} variant="h4" gutterBottom>Search your results!</Typography></Center>
                        <FormControl
                            sx={{ minWidth: 120, m: 5, mb: 4 }}>
                            <InputLabel id="denomiantion-label">Denomination</InputLabel>
                            <Select
                                labelId="denomiantion-label"
                                value={formData.denomination.value}
                                onChange={handleChange}
                                label="Denomination"
                                name="denomination"
                            >
                                <MenuItem value="">
                                    <em>Select denomination</em>
                                </MenuItem>
                                {denominations.map((val) => {
                                    return (
                                        <MenuItem key={val.id} value={val.price}>Rs.{val.price}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ minWidth: 120, m: 5, mb: 4, mt: 0 }}>
                            <InputLabel id="draw-date">Draw date</InputLabel>
                            <Select
                                labelId="draw-date"
                                value={formData.drawDate.value}
                                onChange={handleChange}
                                label="Draw Date"
                                name="drawDate"
                            >
                                <MenuItem value="">
                                    <em>Select Draw Date</em>
                                </MenuItem>
                                {drawDate !== null && drawDate.map((val) => {
                                    return (
                                        <MenuItem key={val.id} value={val.date}>{val.date}</MenuItem>
                                    )
                                })}

                            </Select>
                        </FormControl>

                        <Autocomplete
                            disablePortal
                            id="Serials"
                            name="serials"
                            value={serial}
                            onChange={(event, newValue) => {
                                setSerial(newValue);
                            }}
                            autoHighlight
                            autoComplete
                            options={serials}
                            getOptionLabel={(option) => {
                                if (option !== "All") {
                                    return option.serial
                                }
                                else {
                                    return option
                                }
                            }}
                            sx={{ m: 5, mt: 0 }}
                            renderInput={(params) => <TextField {...params} label="Serials" />}
                        />

                        <Button onClick={handleSubmit} sx={{ mb: 4, ml: 5, mr: 5 }} variant="contained">
                            Search
                        </Button>
                        <Center>
                            <Typography color="text.secondary" variant="subtitle1" gutterBottom>Want to add bonds? <Link component={RouterLink} to="/add-bonds" underline="hover">{'Add series'}</Link> </Typography>
                        </Center>
                    </Stack>
                </Paper>
            </Box>
        </Container>
    );
}
