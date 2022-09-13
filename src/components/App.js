// import logo from './logo.svg';
import React from 'react';
import '../App.css';
import Header from './Header';
import CoffeeControl from './CoffeeControl';
// import Typography from '@mui/material/Typography';
import { Grid , Container} from '@mui/material';


function App() {
  
  return (
    <React.Fragment>
      
        <Container>
        <Grid item container><Header /></Grid>   
              {/* <Typography> */}
              <CoffeeControl />    
              {/* </Typography> */}
              </Container>
      
    </React.Fragment>
  );
}

export default App;
