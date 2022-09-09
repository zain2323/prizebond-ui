import * as React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {TextField, Stack, Typography,
        Button, Checkbox, FormGroup, FormControlLabel, Link} from '@mui/material'
import logo from "../../assets/react.svg"
import Center from "../utils/Center"
import CustomPasswordField from "../utils/CustomPasswordField"

export default function RegisterPage() {  
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        showPassword: false
    })  

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked: value
            }
        })
    }

    function toggleShowPassword() {
        setFormData((prev) => {
            return {
                ...prev,
                showPassword: !prev.showPassword
            }
        })
    }

    return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              marginTop: 7,
              marginBottom: 8,
              width: 500,
              height: 530,
            },
          }}
        >
            <Paper elevation={10}>
                <Stack>
                    <img src={logo} style={{
                        width:50, 
                        height:50,
                        margin: '0 auto',
                        marginTop: 36,
                        marginBottom: 0,
                        padding: 0}
                        }/>
                    <form className="login-form">
                    <Center><Typography mb={2} mt={-5} variant="h4" gutterBottom>Join Us!</Typography></Center>
                    <TextField 
                            style={{width: 400, marginBottom: 16}} 
                            name="name" value={formData.name} onChange={handleChange}
                            label="Name" type="text" placeholder="Full name" 
                            variant="outlined" margin="dense"
                            required/>
                        <TextField 
                            style={{width: 400, marginBottom: 16}} 
                            name="email" value={formData.email} onChange={handleChange}
                            label="Email" type="email" placeholder="Enter your email" 
                            variant="outlined" margin="dense"
                            required/>
                        <CustomPasswordField
                            password={formData.password} 
                            showPassword={formData.showPassword}
                            handleChange={handleChange}
                            toggleShowPassword={toggleShowPassword}
                        />          
                        <Button style={{width: 400, marginTop: 16}} variant="contained">Signup</Button>
                        <Center>
                            <Typography color="text.secondary" mt={5} variant="subtitle1" gutterBottom>Already have an account? <Link href="#" underline="hover">{'Login'}</Link> </Typography> 
                        </Center>
                    </form>
                </Stack>
            </Paper>
        </Box>
      );
}
