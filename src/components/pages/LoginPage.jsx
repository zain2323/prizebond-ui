import * as React from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {TextField, Stack, Typography,
        Button, Checkbox, FormGroup, FormControlLabel, Link, Container} from '@mui/material'
import logo from "../../assets/react.svg"
import Center from "../utils/Center"
import CustomPasswordField from "../utils/CustomPasswordField"

export default function LoginPage() {  
    const [formData, setFormData] = React.useState({
        email: {
            value: "",
            error: false,
            errorMessage: ""
        },
        password: {
            value: "",
            error: false,
            errorMessage: "" 
        },
        rememberMe: {
            value: true,
            error: false,
            errorMessage: ""
        },
        showPassword: {
            value: false,
            error: false,
            errorMessage: ""
        }
    })  


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: {
                  ...prev.name,  
                  "value": type === "checkbox" ? checked: value
                }
            }
        })
    }

    function toggleShowPassword() {
        setFormData((prev) => {
            return {
                ...prev,
                showPassword: {
                    value: !prev.showPassword.value,
                    error: false,
                    errorMessage: ""
                }
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const email = formData.email.value
        const password = formData.password.value
        verifyEmail(formData.email.value)
        verifyPassword(formData.password.value)

        fetch("http://localhost:5000/tokens", {
            method: "POST",
            headers: {
                Authorization: "Basic " + btoa(email + ":" + password),
                'Content-Type': 'application/json',
            },
            body: null,
        })
        .then(response => {
            if (!response.ok) {
                return response.status === 403 ?  'fail' : "error"
            }
            localStorage.setItem('accessToken', response.body.access_token)
            localStorage.setItem('refreshToken', response.body.refresh_token)
            return 'ok'
        })
        .then(status => {
            status === "ok" ? console.log("pass") : console.log("failed")
        })
    }

    function verifyPassword(password) {
            if (password === "") {
                setFormData((prev) => {
                    return {...prev,
                    password: {
                        value: prev.value,
                        error: true,
                        errorMessage: "Password can not be empty"
                    }
                }
                })
            }   
    }

    function verifyEmail(email) {
        if (email === "") {
            setFormData((prev) => {
                return {...prev,
                email: {
                    value: prev.value,
                    error: true,
                    errorMessage: "Email can not be empty"
                }
            }
            })
        }
    }

    function getPaperHeight() {
        console.log("executed")
        if (formData.email.error || 
            formData.password.error) 
            {
                return 540
            }
        else {
            return 500 
        }
    }

    return (
        <Container maxWidth="sm">
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                marginTop: 8,
                marginBottom: 8,
                width: 500,
                height: getPaperHeight,
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
                        <form onSubmit={handleSubmit} className="login-form">
                        <Center><Typography mb={2} mt={-5} variant="h4" gutterBottom>Hello Again!</Typography></Center>
                            <TextField 
                                style={{width: 400, marginBottom: 16}} 
                                name="email" value={formData.email.value} onChange={handleChange}
                                label="Email" type="email" placeholder="Enter your email" 
                                variant="outlined" margin="dense"
                                error={formData.email.error ? true: false} 
                                helperText={formData.email.error ? formData.email.errorMessage: ""}
                                />
                            <CustomPasswordField
                                password={formData.password.value} 
                                showPassword={formData.showPassword.value}
                                handleChange={handleChange}
                                toggleShowPassword={toggleShowPassword}
                                error={formData.password.error}
                                errorMessage={formData.password.errorMessage}
                            />
                            <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <FormGroup>
                                        <FormControlLabel 
                                        name="rememberMe" value={formData.rememberMe.value} onChange={handleChange} control={<Checkbox defaultChecked />} label="Remember me" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={4}  style={{marginTop: 11}}>
                                    <Link href="#" underline="hover">
                                            {'Forgot password?'}
                                    </Link>
                                </Grid>
                            </Grid>
                            </Box>           
                            <Button style={{width: 400, marginTop: 16}} variant="contained" type="submit">Login</Button>
                            <Center>
                                <Typography color="text.secondary" mt={5} variant="subtitle1" gutterBottom>Don't have an account? <Link href="#" underline="hover">{'Sign up'}</Link> </Typography> 
                            </Center>
                        </form>
                    </Stack>
                </Paper>
            </Box>
        </Container>
      );
}
