import * as React from 'react';
import {
    Box, Container, Paper, InputLabel, MenuItem,
    FormControl, Select, Stack, TextField, Button, Typography,
    Link
} from '@mui/material';
import Center from "../utils/Center";
import { Link as RouterLink } from 'react-router-dom';
import { useApi } from "../../contexts/ApiProvider";
import ProgressBar from "../utils/ProgessBar";
import { useLoadingBar } from '../../contexts/LoadingBarProvider';
import AlertMessage from "../utils/AlertMessage";
import { useFlash } from '../../contexts/FlashProvider';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
// import { useLoadingContext } from "react-router-loading";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2979ff',
        darker: '#2962ff',
      },
    },
  });


export default function AddBondsPage() {
    // const loadingContext = useLoadingContext();
    // loadingContext.done()
    const loadingBar = useLoadingBar();
    const api = useApi();
    const flash = useFlash();
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        denomination: {
            value: "",
            error: false,
            errorMessage: ""
        },
        serials: {
            value: "",
            error: false,
            errorMessage: ""
        },
    })
    const [denominations, setDenominations] = React.useState([])

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
    }

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
                setFormData((prev) => {
                    return {
                        ...prev,
                        serials: {
                            value: prev.serials.value,
                            error: true,
                            errorMessage: "Serials length must be 6 digits or you mistyped it"
                        }
                    }
                })
                return null
            }
        }
        return serialsList
    }

    async function handleSubmit() {
        loadingBar.showLoadingBar();
        let serialsList = verifySerial(formData.serials.value)
        let bonds = [];
        const denomination = formData.denomination.value
        if (serialsList !== null && denomination !== "") {
            for (let i = 0; i < serialsList.length; i++) {
                let bond = {
                    serial: serialsList[i],
                    price: denomination
                };
                bonds.push(bond);
            }

            const response = await api.post("/bonds", bonds);
            if (response.ok) {
                flash("Bonds added!", "All of your bonds have been added successfully.", "success")
            }
            else {
                flash("Validation failed", "Please verify all of the required fields.", "error")
            }
        }
        navigate("/add-bonds")
        loadingBar.hideLoadingBar();
    }

    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <ProgressBar />
            <AlertMessage />

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
                            <Center><Typography component={'div'} mb={0} mt={5} variant="h4" gutterBottom>Add your bonds!</Typography></Center>
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

                            <TextField
                                label="Serials"
                                multiline
                                rows={5}
                                placeholder="Example 123456, 654321 ...."
                                sx={{ mb: 5, ml: 5, mr: 5 }}
                                onChange={handleChange}
                                name="serials"
                                value={formData.serials.value}
                                error={formData.serials.error}
                                helperText={formData.serials.error ? formData.serials.errorMessage : ""}
                            />
                            <Button theme={theme} color="primary" onClick={handleSubmit} sx={{ mb: 4, ml: 5, mr: 5, borderRadius:20 }} variant="contained">
                                Add
                            </Button>
                            <Center>
                                <Typography component={'div'} color="text.secondary" variant="subtitle1" gutterBottom>Want to add series? <Link component={RouterLink} to="/add-series" underline="hover">{'Add series'}</Link> </Typography>
                            </Center>

                        </Stack>

                    </Paper>
                </Box>
            </Container>
        </motion.div>
    );
}
