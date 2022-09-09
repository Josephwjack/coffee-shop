// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import Header from './Header';
import CoffeeControl from './CoffeeControl';
// import Typography from '@mui/material/Typography';
import { Grid , Typography} from '@mui/material';


function App() {
  return (
    <React.Fragment>
      <div className="bg">
        <Grid item container><Header /></Grid>   
              <Typography>
              <CoffeeControl />    
              </Typography>
         
      </div>
    </React.Fragment>
  );
}

export default App;
