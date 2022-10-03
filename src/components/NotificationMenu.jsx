import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { useApi } from "../contexts/ApiProvider";

const badgeTheme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: '#616161',
    },
  },
});

const typographyTheme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 15,
      fontWeight: 500,
    },
    body2: {
      color: "gray",
    },
    button: {
      fontSize: 16,
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 8,
      marginBottom: 5
    },
  },
});


export default function NotificarionMenu() {
  const api = useApi()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [notifications, setNotifications] = React.useState([])

  const handleClick = async (event) => {
    setAnchorEl(event.currentTarget);
    const response = await api.put("/notifications", notifications)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function fetchNotifications() {
    const response = await api.get("/notifications")
    setNotifications(response.ok ? response.body : [])
  }

  React.useEffect(() => {
    const intervalId = setInterval(fetchNotifications, 10000);
    return () => clearInterval(intervalId)
  }, [api])

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Notifications">
          <IconButton
            onClick={handleClick}>
            <Badge theme={badgeTheme} color="primary" overlap="circular" badgeContent={notifications.length}>
              <NotificationsNoneIcon
                sx={{
                  mt: 1.2,
                  color: "white"
                }} />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={RouterLink} to="/account-settings">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <ThemeProvider theme={typographyTheme}>
              <Typography variant="h6" sx={{ mr: 20 }}>Your Notifications</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Mark as all read</Typography>
            </ThemeProvider>
          </Box>
        </MenuItem>
        <Divider />
        {
          notifications.map((n) => {
            return (
              <MenuItem onClick={() => alert("clicked")}>
                <Box sx={{
                  width: "100%",
                }}>
                  <Paper elevation={4} sx={{ borderRadius: 2, height: 140 }}>
                    <Stack>
                      <ThemeProvider theme={typographyTheme}>
                        <br />
                        <Typography variant="button">{n.name}</Typography>
                        <br />
                        <Typography sx={{ p: 2 }} variant="subtitle1">{`${n.description} Check your results now!`}</Typography>
                        <br />
                        <Typography variant="body2" sx={{ ml: 2 }}>40 minutes ago</Typography>
                      </ThemeProvider>
                    </Stack>
                  </Paper>
                </Box>
              </MenuItem>
            )
          })
        }
        {
          notifications.length === 0 && 
          <MenuItem>
            You are all caught!
          </MenuItem>
        }

      </Menu>
    </div>
  );
}
