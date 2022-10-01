import * as React from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
    TextField, Stack, Typography,
    Button, Checkbox, FormGroup, FormControlLabel, Link, Container, fabClasses
} from '@mui/material'
import logo from "../../assets/react.svg";
import Center from "../utils/Center";
import CustomPasswordField from "../utils/CustomPasswordField"
import AlertMessage from "../utils/AlertMessage"
import { useUser } from '../../contexts/UserProvider'
import { useFlash } from '../../contexts/FlashProvider'
import { useLoadingBar } from '../../contexts/LoadingBarProvider'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import ProgressBar from "../utils/ProgessBar"
import { motion } from "framer-motion";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2979ff',
        darker: '#2962ff',
      },
    },
  });

export default function LoginPage() {
    const flash = useFlash();
    const loadingBar = useLoadingBar();
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

    const { login } = useUser()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(navigate)

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: {
                    ...prev.name,
                    "value": type === "checkbox" ? checked : value
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        loadingBar.showLoadingBar();
        const email = formData.email.value;
        const password = formData.password.value;
        verifyEmail(email);
        verifyPassword(password);
        const response = await login(email, password);
        if (!response) {
            flash("Login failed", "Credentials mismatch", "error");
            navigate("/login")
        }
        else {
            let next = "/user";
            if (location.state && location.state.next) {
                next = location.state.next;
            }
            flash("Login Success", "You have been logged in", "success");
            navigate(next)
        }
        loadingBar.hideLoadingBar();
    };

    function verifyPassword(password) {
        if (password === "") {
            setFormData((prev) => {
                return {
                    ...prev,
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
                return {
                    ...prev,
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
        if (formData.email.error ||
            formData.password.error) {
            return 540
        }
        else {
            return 500
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <ProgressBar />
            <AlertMessage />
            <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
                <Paper elevation={10} sx={{ height: getPaperHeight }}>
                    <Stack>
                        <img src={logo} style={{
                            width: 50,
                            height: 50,
                            margin: '0 auto',
                            marginTop: 36,
                            marginBottom: 0,
                            padding: 0
                        }
                        } />
                        <form onSubmit={handleSubmit} className="login-form">
                            <Center><Typography component={'div'} mb={2} mt={-5} variant="h4" gutterBottom>Hello Again!</Typography></Center>
                            <TextField
                                style={{ width: "103%", marginBottom: 16 }}
                                name="email" value={formData.email.value} onChange={handleChange}
                                label="Email" type="email" placeholder="Enter your email"
                                variant="outlined" margin="dense"
                                error={formData.email.error ? true : false}
                                helperText={formData.email.error ? formData.email.errorMessage : ""}
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
                                    <Grid item xs={4} style={{ marginTop: 11 }}>
                                        <Link href="#" underline="hover">
                                            {'Forgot password?'}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Button theme={theme} color="primary" style={{ width: "103%", marginTop: 16, borderRadius:20 }} variant="contained" type="submit">Login</Button>
                            <Center>
                                <Typography component={'div'} color="text.secondary" mt={5} variant="subtitle1" gutterBottom>Don't have an account? <Link component={RouterLink} to="/register" underline="hover">{'Sign up'}</Link> </Typography>
                            </Center>
                        </form>
                    </Stack>
                </Paper>
            </Container>
        </motion.div>
    );
}
