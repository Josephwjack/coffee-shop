import React from 'react';
import Coffee from './Coffee';
import PropTypes from 'prop-types';
import { Card, Typography }from '@mui/material';

function CoffeeList(props) {
  
  return (
    <React.Fragment>
      <hr/>
      <div style={{
            display: 'block', width: "80vw", padding: 80, margin: 'auto', justifyContent: 'center', minHeight: '60vh'
        }}>
        <div className="col d-flex-row justify-content-center ">   
          <Typography component={'span'} variant={'body2'}>
            <Card>
            {props.coffeeList.map((coffee) =>     
            <Coffee
              whenCoffeeClicked = {props.onCoffeeSelection}
              name={coffee.name}
              roast={coffee.roast}
              origin={coffee.origin}
              price={coffee.price}
              pounds={coffee.pounds}
              id={coffee.id}
              key={coffee.id}
            />
            )}</Card>
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;