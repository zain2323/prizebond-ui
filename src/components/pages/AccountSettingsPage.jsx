import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Typography } from '@mui/material';
import { Grid as GridTable } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import { _ } from "gridjs-react";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Center from "../utils/Center";
import { useUser } from '../../contexts/UserProvider'
import { useApi } from '../../contexts/ApiProvider'
import {motion} from "framer-motion";

export default function AccountSettingsPage() {
    const { user } = useUser()
    const api = useApi()
    
    const editButton = _(
        <>
            <a className="EditButton" onClick={()=>alert("clicked")}>
                Edit
            </a>
            <EditRoundedIcon />
        </>

    )
    const [info, setInfo] = React.useState([])

    async function fetchInfo() {
        const response = await api.get("/user/bonds/info");
        setInfo(response.ok ? response.body : null);
    }
    
    React.useEffect(() => {
        fetchInfo()
    }, [api])

    function getTotalBonds() {
        let sum = 0
        
        for (let i = 0; i < info.length; i++) {
            sum += info[i].total
        }
        return sum
    }

    function getTotalWorth() {
        let worth = 0
        
        for (let i = 0; i < info.length; i++) {
            worth += info[i].worth
        }
        return worth
    }

    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
        <Container sx={{
            mt: 5,
            mb: 5
        }}>
            <Center>
                <Typography sx={{ mb: 5 }} variant="h3">General Account Settings</Typography>
            </Center>
            <GridTable
                data={[
                    [_(<Typography variant="h6">Name</Typography>), _(<Typography sx={{textTransform: "capitalize"}} variant="body1">{user.name}</Typography>), editButton],
                    [_(<Typography variant="h6">Email</Typography>), _(<Typography variant="body1">{user.email}</Typography>), editButton],
                    [_(<Typography variant="h6">Password</Typography>), _(<Typography variant="body1">**********</Typography>), editButton],
                    [_(<Typography variant="h6">Confirmed</Typography>), _(<Typography variant="body1">{user.confirmed ? "Confirmed": "Not Confirmed"}</Typography>), editButton],
                    [_(<Typography variant="h6">Registered At</Typography>), _(<Typography variant="body1">{new Date(user.registered_at).toDateString()}</Typography>), editButton]
                ]}

            />
            <Center>
                <Typography sx={{ mb: 5, mt: 5 }} variant="h3">Your Bonds Information</Typography>
            </Center>
            <GridTable
                columns={["Denomination", "Total Numbers", "Worth (In Rs)"]}
                data={info.map(data=> {
                    return [_(<Typography variant="h6">Rs.{data.price}</Typography>), 
                            _(<Typography variant="body1">{parseInt(data.total) < 9 ? "0"+data.total: data.total}</Typography>), 
                            _(<Typography variant="body1">Rs.{data.worth}</Typography>)]
                })}
            />
             <Center>
                <GridTable
                columns={["Number of bonds", "Total Investment"]}
                data={[
                    [_(<Typography variant="h6">{getTotalBonds()}</Typography>), _(<Typography variant="h6">Rs.{getTotalWorth()}</Typography>)]
                ]}

            />
            </Center>
            
        </Container>
        </motion.div>
    )
}