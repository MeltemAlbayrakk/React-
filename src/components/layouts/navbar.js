import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import userPhoto from '../images/user.png';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PrintIcon from '@mui/icons-material/Print';



export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [countries, setCountries] = React.useState(null);
  const [currentTime, setCurrentTime] = React.useState(new Date());

  const settings = ['My Profile', 'Task', 'Settings', 'Log out'];
  const countriesOp = ['USA', 'China', 'Russia', 'Spain','Brazil','France','Algeria'];

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date());
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCountriesMenu = (event) => {
    setCountries(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseCountriesMenu = () => {
    setCountries(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ marginLeft: "240px", flexGrow: 1 }}>
      <AppBar position="static" sx={{ height:"85px",backgroundColor: '#ffffff', elevation: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ color:"#684BF3", mr: 2 }}
          >
            <MoreVertIcon />
          </IconButton>

          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={userPhoto} />
            </IconButton>
          </Tooltip>
          <Box sx={{ marginLeft: "10px" }}>
            <Typography sx={{ color: "#AEAEAE", fontWeight: "bold" }}>
              Abrilay Khatun
            </Typography>
            <Typography sx={{ color: "#AEAEAE", opacity: "0.8" }}>
              abrilakh@gmail.com
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <TravelExploreIcon onClick={handleOpenCountriesMenu} sx={{color:"#684BF3", mr: 4, my: 0.5 }} />

          <PrintIcon sx={{color:"#684BF3", mr: 4, my: 0.5 }} />

        <Box sx={{float:"right",marginRight:"10px"}}> 
            <Typography sx={{fontSize:"20px",textAlign:"right",color:"black", fontWeight:"bold"}}>{currentTime.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
          </Typography>

          <Typography sx={{fontSize:"12px",opacity: "0.5", color: "black", fontWeight: "bold" }}>
            {currentTime.toLocaleDateString('en-US', {  day: 'numeric', weekday: 'long', year: 'numeric', month: 'long' })}
          </Typography>
          </Box>
         
          <Button sx={{ backgroundColor: "#9C99FD", borderRadius: "15px", "&:hover": { backgroundColor: "#6F51FF" } }} variant="contained">Pending Tasks</Button>
          <Box sx={{ color: "#9C99FD", display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color:"#684BF3", mr: 1, my: 0.5 }} />
                <TextField sx={{}} id="input-with-sx" label="Search" variant="standard" />
              </Box>
            </Box>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
         
                <MailIcon />
              
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 22 new notifications"
              color="inherit"
            >
              <Badge badgeContent={22} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))} 
      
      </Menu>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={countries}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(countries)}
        onClose={handleCloseCountriesMenu}
      >
         {countriesOp.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseCountriesMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
      
      </Menu>
      
    </Box>
  );
}
