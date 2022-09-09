import React from 'react';
import Coffee from './Coffee';
import PropTypes from 'prop-types';
import { Card }from '@mui/material';

function CoffeeList(props) {
  
  return (
    <React.Fragment>
      <hr/>
      <Card>
      {props.coffeeList.map((coffee) =>     
      <Coffee
        whenCoffeeClicked = {props.onCoffeeSelection}
        name={coffee.name}
        roast={coffee.roast}
        origin={coffee.origin}
        price={coffee.price}
        id={coffee.id}
        key={coffee.id}
      />
      )}</Card>
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;