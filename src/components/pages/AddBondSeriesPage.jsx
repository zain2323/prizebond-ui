import * as React from 'react';
import {
    Box, Container, Paper, InputLabel, MenuItem,
    FormControl, Select, Stack, TextField, Button, Typography,
    Link
} from '@mui/material';
import Center from "../utils/Center";
import { Link as RouterLink } from 'react-router-dom';
import { useApi } from "../../contexts/ApiProvider";


export default function AddBondSeriesPage() {
    const api = useApi()
    const [formData, setFormData] = React.useState({
        denomination: {
            value: "",
            error: false,
            errorMessage: ""
        },
        start: {
            value: "",
            error: false,
            errorMessage: ""
        },
        end: {
            value: "",
            error: false,
            errorMessage: ""
        }
    })

    const [denominations, setDenominations] = React.useState([])

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: {
                    ...prev.name,
                    "value": value
                }
            }
        })
    }

    async function fetchDenominations() {
        const response = await api.get("/denominations");
        setDenominations(response.ok ? response.body : null);
    }

    function verifyRange(start, end) {
        start = parseInt(start);
        end = parseInt(end);
        if (end === Number.NaN || start  === Number.NaN) {
            setFormData((prev) => {
                return {
                    ...prev,
                    start: {
                        value: prev.start.value,
                        error: true,
                        errorMessage: "Invalid serial"
                    },
                    end: {
                        value: prev.end.value,
                        error: true,
                        errorMessage: "Invalid serial"
                    }
                }
            })
            return false;
        }
        if (start > end) {
            setFormData((prev) => {
                return {
                    ...prev,
                    start: {
                        value: prev.start.value,
                        error: true,
                        errorMessage: "Invalid range"
                    }
                }
            })
            return false;
        }
        return true;
    }

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
                setFormData((prev) => {
                    return {
                        ...prev,
                        start: {
                            value: prev.start.value,
                            error: true,
                            errorMessage: "Invalid serial"
                        },
                        end: {
                            value: prev.end.value,
                            error: true,
                            errorMessage: "Invalid serial"
                        }
                    }
                })
                return false;
            }
        }
        return true;
        
    }

    React.useEffect(() => {
        fetchDenominations()
    }, [api])

    async function handleSubmit() {
        event.preventDefault();
        const isStartValid = verifySerial(formData.start.value);
        const isEndValid = verifySerial(formData.end.value);
        const isRangeValid = verifyRange(formData.start.value, formData.end.value);

        const series = {
            start: formData.start.value,
            end: formData.end.value,
            price: formData.denomination.value
        };

        if (isStartValid && isEndValid && isRangeValid) {
            const response = await api.post("/bond/range", series);
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
                        height: 460,
                        marginTop: 7,
                        marginBottom: 8,
                    },
                }}
            >
                <Paper elevation={10}>
                    
                        <form onSubmit={handleSubmit}>
                        <Stack>
                            <Center><Typography mb={0} mt={5} variant="h4" gutterBottom>Add your bonds!</Typography></Center>
                            <FormControl required
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
                            <Stack direction="row">
                                <TextField sx={{ mt: 2, mb: 4, ml: 5, mr: 5 }}
                                    id="start" placeholder="123456"
                                    name="start" value={formData.start.value}
                                    label="Start" variant="outlined"
                                    onChange={handleChange} 
                                    error={formData.start.error} 
                                    helperText={formData.start.error ? formData.start.errorMessage: ""}/>
                                <TextField sx={{ mt: 2, mb: 4, ml: 5, mr: 5 }}
                                    id="end" placeholder="123459"
                                    label="End" variant="outlined"
                                    name="end"
                                    value={formData.end.value}
                                    onChange={handleChange} 
                                    error={formData.end.error} 
                                    helperText={formData.end.error ? formData.end.errorMessage: ""}/>
                            </Stack>

                            <Button type="submit" sx={{ mt: 2, mb: 4, ml: 5, mr: 5 }} variant="contained">
                                Add
                            </Button>
                            <Center>
                                <Typography color="text.secondary" variant="subtitle1" gutterBottom>Want to add bonds? <Link component={RouterLink} to="/add-bonds" underline="hover">{'Add bonds'}</Link></Typography>
                            </Center>
                            </Stack>
                        </form>
                    

                </Paper>
            </Box>
        </Container>
    );
}
