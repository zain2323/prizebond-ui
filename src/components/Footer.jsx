import React from "react"
import {Container, Box, Grid, Link, Typography, Divider} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Footer(){
    return (
        <footer>
            <Box sx={{
                backgroundColor: "primary.dark",
                color: "white",
                p: 5
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">
                                <Box sx={{p:1, m:1}}>Help</Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Contact</Link>
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Support</Link>
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Privacy policy</Link>
                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                        <Typography variant="h6">
                                <Box sx={{p:1, m:1}}>Accounts</Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Login</Link>
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Become a member</Link>
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Forgot password?</Link>
                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">
                                <Box sx={{p:1, m:1}}>Prize Bond</Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Check your results</Link>
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Schedule 2022</Link>
                                </Box>
                            </Typography>
                            <Typography>
                                <Box sx={{p:1, m:1}}>
                                    <Link className="footer-link" underline="none" href="/" color="inherit">Draws info</Link>
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                   
                    <Box textAlign="center"  sx={{mt:3}}>
                        <Typography
                            variant="h6"
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