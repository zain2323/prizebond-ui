import React from "react"
import {Container, Box, Grid, Link, Typography, Divider} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Link as RouterLink} from 'react-router-dom';

export default function Footer(){
    return (
        <footer>
            <Box sx={{  
                backgroundColor: "#212121",
                color: "white",
                p: 5
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Typography component={'div'} variant="h6">
                                <Box sx={{p:1, m:1}}>Help</Box>
                            </Typography>
                            <Typography component={'div'} >
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Contact</Link>
                                </Box>
                            </Typography>
                            <Typography component={'div'} >
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Support</Link>
                                </Box>
                            </Typography>
                            <Typography component={'div'} >
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Privacy policy</Link>
                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                        <Typography component={'div'} variant="h6">
                                <Box sx={{p:1, m:1}}>Accounts</Box>
                            </Typography>
                            <Typography component={'div'}>
                                <Box sx={{p:1, m:1}}>
                                    <Link component={RouterLink} className="footer-link" underline="none" to="/login" color="inherit">Login</Link>
                                </Box>
                            </Typography> 
                            <Typography component={'div'}>
                                <Box sx={{p:1, m:1}}>
                                    <Link component={RouterLink} className="footer-link" underline="none" to="/register" color="inherit">Become a member</Link>
                                </Box>
                            </Typography>
                            <Typography component={'div'}>
                                <Box sx={{p:1, m:1}}>
                                    <Link component={RouterLink} className="footer-link" underline="none" to="/" color="inherit">Forgot password?</Link>
                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography  component={'div'} variant="h6">
                                <Box sx={{p:1, m:1}}>Prize Bond</Box>
                            </Typography>
                            <Typography component={'div'}>
                                <Box sx={{p:1, m:1}}>
                                    <Link component={RouterLink} className="footer-link" underline="none" to="/results" color="inherit">Check your results</Link>
                                </Box>
                            </Typography>
                            <Typography component={'div'}>
                                <Box sx={{p:1, m:1}}>
                                    <Link component={RouterLink} className="footer-link" underline="none" to="/upcoming-results" color="inherit">Draw schedule</Link>
                                </Box>
                            </Typography>
                            <Typography component={'div'}>
                                <Box sx={{p:1, m:1}}>
                                    <Link component={RouterLink} className="footer-link" underline="none" to="/draws-info" color="inherit">Draws info</Link>
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                   
                    <Box textAlign="center"  sx={{mt:3}}>
                        <Typography
                            variant="h6"
                            component={'div'}
                            noWrap
                            sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                        Fast Bond  &copy; {new Date().getFullYear()} All rights reserved.
                        </Typography>
                </Box>
                </Container>
            </Box>
        </footer>
    )
}