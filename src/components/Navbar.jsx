import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Link as RouterLink} from 'react-router-dom';
import {useUser} from "../contexts/UserProvider";
import AccountMenu from "./AccountMenu"


const pages = ['Home', 'Results', 'Upcoming Results', 'Draws Info'];
const notSignedIn = ['Login', "Register"]
const signedIn = ["Logout"]
const pagesLink = {
  "Home": "/",
  "Results": "/results",
  "Upcoming Results": "/upcoming-results",
  "Draws Info": "/draws-info",
  "Login": "/login",
  "Register": "/register",
  "Logout": "/logout"
}

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const {user, logout} = useUser()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Fast Bond
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                 <MenuItem 
                      key={page} 
                      onClick={handleCloseNavMenu}
                      component={RouterLink}
                      to={pagesLink[page]}>
                    <Typography textAlign="center">{page}</Typography>
                 </MenuItem>
              ))} 
              <Divider/>
              {user === null && notSignedIn.map((page) => (
                <MenuItem 
                      key={page}
                      onClick={handleCloseNavMenu}
                      component={RouterLink}
                      to={pagesLink[page]}>
                     <Typography textAlign="center">{page}</Typography> 
                </MenuItem>
              ))}
              {user !== null && signedIn.map((page) => (
                <MenuItem key={page} onClick={logout}>
                     <Typography textAlign="center">{page}</Typography> 
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Fast Bond
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={RouterLink}
                to={pagesLink[page]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0,  display: { xs: 'none', md: 'flex' } }}>
          {user === null && 
            notSignedIn.map((item) => (
                <Button
                  key={item}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={pagesLink[item]}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {item}
                </Button>
              ))}
            {user !== null &&
               <AccountMenu logout={logout}/>}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
