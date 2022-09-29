import React from "react"
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import { Container, Typography, Select, Stack, FormControl, InputLabel, MenuItem } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useApi } from "../../contexts/ApiProvider";
import { motion } from "framer-motion";
import ProgressBar from "../utils/ProgessBar";
import { useLoadingBar } from '../../contexts/LoadingBarProvider';
import { useFlash } from '../../contexts/FlashProvider';
import CircularProgress from '@mui/material/CircularProgress';
import Center from ".././utils/Center";

export default function ResultsPage() {
    const api = useApi();
    const loadingBar = useLoadingBar();
    const flash = useFlash();

    const [bonds, setBonds] = React.useState([])
    const [denominations, setDenominations] = React.useState([])
    const [selectedDenomination, setSelectedDenomination] = React.useState("")
    const [drawDate, setDrawDate] = React.useState([])
    const [selectedDrawDate, setSelectedDrawDate] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    function handleDenominationChange(event) {
        const { value } = event.target
        setSelectedDenomination(value)
        if (value !== "") {
            fetchDrawDate(value)
        }
        else {
            setDrawDate([])
        }
    }

    function handleDrawDateChange(event) {
        const { value } = event.target
        setSelectedDrawDate(value)
    }

    async function fetchBonds(denominationId, dateId) {
        setLoading(true)
        const response = await api.get(`/result/${denominationId}/${dateId}`)
        setBonds(response.ok ? response.body : [])
        setLoading(false)
    }

    async function fetchDenominations() {
        const response = await api.get("/denominations");
        setDenominations(response.ok ? response.body : null);
    }

    function getDenominationId(denomination) {
        for (let i = 0; i < denominations.length; i++) {
            if (denominations[i].price === denomination) {
                return denominations[i].id;
            }
        }
        return null;
    }

    function getDrawDateId(date) {
        for (let i = 0; i < drawDate.length; i++) {
            if (drawDate[i].date === date) {
                return drawDate[i].id;
            }
        }
        return null;
    }

    async function fetchDrawDate(price) {
        const denomination_id = getDenominationId(price);
        const response = await api.get(`/drawdate/${denomination_id}`);
        setDrawDate(response.ok ? response.body : null);
    }

    React.useEffect(() => {
        const denominationId = getDenominationId(selectedDenomination)
        const dateId = getDrawDateId(selectedDrawDate)
        if (denominationId && dateId) {
            fetchBonds(denominationId, dateId)
        }
    }, [api, selectedDrawDate])

    React.useEffect(() => {
        fetchDenominations()
    }, [api])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Container>
                <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
                    Search your results
                </Typography>
                <Stack direction="row" spacing={2} sx={{
                    display: 'flex',
                    justifyContent: "flex-end"
                }}>
                    <FormControl
                        sx={{ minWidth: 140 }}>
                        <InputLabel id="denomiantion-label">Denomination</InputLabel>
                        <Select
                            labelId="denomiantion-label"
                            value={selectedDenomination}
                            onChange={handleDenominationChange}
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
                        sx={{ minWidth: 140 }}>
                        <InputLabel id="drawdate-label">Draw Date</InputLabel>
                        <Select
                            labelId="drawDate-label"
                            value={selectedDrawDate}
                            onChange={handleDrawDateChange}
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
                </Stack>
                {loading && <Center><CircularProgress /></Center>}
                
                    <Grid
                        data={!loading ? bonds.map(bond => {
                            return [bond.denomination, bond.serial, bond.draw_date, bond.position, bond.prize, bond.draw_num, bond.location]
                        }): []}
                        autoWidth={false}
                        columns={['Denomination', 'Serial', 'Date', 'Position', 'Prize', 'Draw no', 'City']}
                        search={true}
                        sort={true}
                        pagination={{
                            enabled: true,
                            limit: 50,
                        }} />
            </Container>
        </motion.div>
    )
}