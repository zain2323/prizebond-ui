import * as React from 'react';
import {
    Box, Container, Paper, InputLabel, MenuItem,
    FormControl, Select, Stack, TextField, Button, Typography,
    Link
} from '@mui/material';
import Center from "../utils/Center";
import { Link as RouterLink } from 'react-router-dom';
import { useApi } from "../../contexts/ApiProvider";

export default function AddBondsPage() {
    const api = useApi()
    const [denomination, setDenomination] = React.useState("");
    const [denominations, setDenominations] = React.useState([])
    const [serials, setSerials] = React.useState();
    const [isInValidSerial, setIsInValidSerial] = React.useState(false);

    const handleDenominationChange = (event) => {
        setDenomination(event.target.value);
    };

    const handleSerialChange = (event) => {
        setSerials(event.target.value);
        setIsInValidSerial(false);
    };

    async function fetchDenominations() {
        const response = await api.get("/denominations");
        setDenominations(response.ok ? response.body : null);
    }

    React.useEffect(() => {
        fetchDenominations()
    }, [api])

    function removeWhiteSpacesFromSerial(serialsList) {
        let serials = serialsList.split(",");
        serials = serials.map(serial => serial.trim());
        while ("" in serials) {
            serials.remove("");
        }
        let newSerials = [];
        serials.forEach(serial => {
            if (serial !== "") {
                newSerials.push(serial);
            }
        })
        return newSerials;
    }

    function verifySerial(serials) {
        let serialsList = removeWhiteSpacesFromSerial(serials);
        for (let i = 0; i < serialsList.length; i++) {
            const serial = serialsList[i];
            if (serial.length !== 6 || parseInt(serial) === Number.NaN) {
                setIsInValidSerial(prev => !prev);
            }
        }
        return serialsList
    }

    async function handleSubmit() {
        let serialsList = verifySerial(serials)
        let bonds = [];
        if (!isInValidSerial && denomination !== "") {
            for (let i = 0; i < serialsList.length; i++) {
                let bond = {
                    serial: serialsList[i],
                    price: denomination
                };
                bonds.push(bond);
            }

            const response = await api.post("/bonds", bonds);
            if (response.ok) {
                console.log("OK");
                console.log(response.body)
            }
            else {
                console.log("error");
            }
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
                        <Center><Typography mb={0} mt={5} variant="h4" gutterBottom>Add your bonds!</Typography></Center>
                        <FormControl required
                            sx={{ minWidth: 120, m: 5, mb: 4 }}>
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
                                {denominations.map((val) => {
                                    return (
                                        <MenuItem key={val.id} value={val.price}>Rs.{val.price}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>

                        <TextField
                            label="Serials"
                            multiline
                            rows={5}
                            placeholder="Example 123456, 654321 ...."
                            sx={{ mb: 5, ml: 5, mr: 5 }}
                            onChange={handleSerialChange}
                            value={serials}
                            error={isInValidSerial}
                            helperText={isInValidSerial ? "Serials length must be 6 digits or you mistyped it" : ""}
                        />
                        <Button onClick={handleSubmit} sx={{ mb: 4, ml: 5, mr: 5 }} variant="contained">
                            Add
                        </Button>
                        <Center>
                            <Typography color="text.secondary" variant="subtitle1" gutterBottom>Want to add series? <Link component={RouterLink} to="/add-series" underline="hover">{'Add series'}</Link> </Typography>
                        </Center>

                    </Stack>

                </Paper>
            </Box>
        </Container>
    );
}
