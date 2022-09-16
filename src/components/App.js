// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import Header from './Header';
import CoffeeControl from './CoffeeControl';
import { Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <React.Fragment>
      <Grid item container><Header /></Grid>   
        <CoffeeControl />    
    </React.Fragment>
  );
}

export default App;
