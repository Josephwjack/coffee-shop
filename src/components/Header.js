import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function Header(){

  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h5" >Cup of Joe's Cafe</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
