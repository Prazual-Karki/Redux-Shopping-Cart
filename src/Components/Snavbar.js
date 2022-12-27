import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./Snavbar.css"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';




const Snavbar = () => {

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const items = useSelector((state)=> state.cart)
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    
    // <div style={{display:"flex",justifyContent:"space-evenly"}}>
    //   <span>redux shopping cart</span>
      
    //   <Link to="/">Home</Link>

    //   <Link to="/Cart">Cart</Link>
    //   <span>cart items: {items.length}</span>
    // </div>
    <Box>
      <AppBar position='sticky'>
        <Toolbar sx={{justifyContent:"space-evenly"}}>
          
          <Link className='navLink' to="/" >Home</Link>
          <Link className='navLink' to="/Product" >Products</Link>
          <Link className='navLink' to="/Cart" >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={items.length} color="secondary">
                <ShoppingCartIcon/>
              </StyledBadge>
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Prazual" src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/35849116_2212117399047802_7203363056854761472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=IbmHHOhvlF8AX_40gR1&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDhGl3tBg_vIlQaolqLYJOpB_HjJ3_RD6HRiMQjPWwPdQ&oe=63CE9269" />
              </IconButton>
            </Tooltip>
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
          </Box>

          
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Snavbar;




