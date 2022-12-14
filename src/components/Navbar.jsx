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
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { useUser } from "../contexts/UserProvider";
import AccountMenu from "./AccountMenu";
import NotificationMenu from "./NotificationMenu";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { useFlash } from '../contexts/FlashProvider'
import { useLoadingBar } from '../contexts/LoadingBarProvider'
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

const pages = ['Home', 'Results', 'Upcoming Results', 'Draws Info'];
const notSignedIn = ['Login', "Register"]
const signedIn = ["My bonds", "Add bonds", "Add series", "Check results"]
const pagesLink = {
  "Home": "/",
  "Results": "/results",
  "Upcoming Results": "/upcoming-results",
  "Draws Info": "/draws-info",
  "Login": "/login",
  "Register": "/register",
  "My bonds": "/user",
  "Add bonds": "/add-bonds",
  "Add series": "/add-series",
  "Check results": "/search-results"
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: '#616161',
    },
  },
});

const Navbar = () => {
  const flash = useFlash();
  const navigate = useNavigate()
  const loadingBar = useLoadingBar();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { user, logout } = useUser()

  async function logOut() {
    loadingBar.showLoadingBar();
    await logout();
    flash("Logout Success", "You have been logged out", "success");
    navigate("/login");
    loadingBar.hideLoadingBar();
  }

  return (
    <AppBar position="static" color="primary" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack direction="row" sx={{
            "&:hover": {
              borderRadius: 30,
              backgroundColor: "#616161",
              padding: 0.5
            }
          }}>
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
                textDecoration: 'none'
              }}
            >
              Fast Bond
            </Typography>
          </Stack>

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
              {user === null && pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={pagesLink[page]}>
                  <Typography component={'div'} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {user === null && <Divider />}
              {user === null && notSignedIn.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={pagesLink[page]}>
                  <Typography component={'div'} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {user !== null && signedIn.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={pagesLink[page]}>
                  <Typography component={'div'} textAlign="center">{page}</Typography>
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
            {user === null &&
              pages.map((page) => (
                <NavLink
                  key={page}
                  to={pagesLink[page]}
                  className="link">
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: 'white',
                      display: 'block',
                    }}
                  >
                    {page}
                  </Button>

                </NavLink>

              ))}
            {user !== null &&
              signedIn.map((item) => (
                <NavLink
                  key={item}
                  to={pagesLink[item]}
                  className="link">
                  <Button
                    key={item}
                    onClick={handleCloseNavMenu}
                    sx={{ color: 'white', display: 'block' }}
                  >
                    {item}
                  </Button>
                </NavLink>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
            {user === null &&
              notSignedIn.map((item) => (
                <NavLink
                  key={item}
                  to={pagesLink[item]}
                  className="link">
                  <Button
                    key={item}
                    onClick={handleCloseNavMenu}
                    sx={{ color: 'white', display: 'block' }}
                  >
                    {item}
                  </Button>
                </NavLink>
              ))}
            {user !== null &&
              <>
                <NotificationMenu />
                <AccountMenu logout={logOut} />
              </>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
