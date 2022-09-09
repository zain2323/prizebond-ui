import * as React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {TextField, Stack, Typography,
        Button, Link} from '@mui/material'
import logo from "../../assets/react.svg"
import Center from "../utils/Center"
import CustomPasswordField from "../utils/CustomPasswordField"

export default function RegisterPage() {  
    const [formData, setFormData] = React.useState({
        fullname: {
            value: "",
            error: false,
            errorMessage: ""
        },
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
        verifyEmail(formData.email.value)
        verifyPassword(formData.password.value)
        verifyName(formData.fullname.value)
        console.log(formData)
    }

    function verifyPassword(val) {
            if (val === "") {
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

    function verifyEmail(val) {
        if (val === "") {
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

    function verifyName(val) {
        if (val === "") {
            setFormData((prev) => {
                return {...prev,
                fullname: {
                    value: prev.value,
                    error: true,
                    errorMessage: "Name can not be empty"
                }
            }
            })
        }
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
                    <form onSubmit={handleSubmit} className="login-form">
                    <Center><Typography mb={2} mt={-5} variant="h4" gutterBottom>Join Us!</Typography></Center>
                    <TextField 
                            style={{width: 400, marginBottom: 16}} 
                            name="fullname" value={formData.fullname.value} onChange={handleChange}
                            label="Name" type="text" placeholder="Enter your name" 
                            variant="outlined" margin="dense"
                            error={formData.fullname.error ? true: false} 
                            helperText={formData.fullname.error ? formData.fullname.errorMessage: ""}
                            />
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
                        <Button style={{width: 400, marginTop: 16}} variant="contained" type="submit">Sign up</Button>
                        <Center>
                            <Typography color="text.secondary" mt={5} variant="subtitle1" gutterBottom>Already have an account? <Link href="#" underline="hover">{'Login'}</Link> </Typography> 
                        </Center>
                    </form>
                </Stack>
            </Paper>
        </Box>
      );
}