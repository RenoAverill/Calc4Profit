import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to='/' color='inherit' sx={{ flexGrow: 1, textDecorationLine: 'none' }}>
            Calcs 4 Profit
          </Typography>
          <Button component={Link} to='signin' color="inherit" >
            Login
          </Button>
          <Button component={Link} to='signup' color="inherit" >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
