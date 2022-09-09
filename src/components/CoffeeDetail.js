import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Card} from '@mui/material';




function CoffeeDetail(props){
  const { coffee } = props;


  // const message = "Out of Stock";
  // const lowStock = "Uh oh, time to order more!";
  // if (props.pounds < 25) {
  //   return lowStock;
  // } else if (props.pounds === 0) {
  //   return message;
  // }

  
  return (
    <React.Fragment>
      <Card >
      <h2>Coffee Details</h2>
      <h4>Name: {coffee.name}</h4>
      <h4>Roast: {coffee.roast}</h4>
      <h4>Origin: {coffee.origin}</h4>
      <h4>Price: {coffee.price}</h4>
      <h4>Inventory: {coffee.pounds}lbs.</h4>

      <hr/>
      <ButtonGroup variant="outlined" aria-label="large button group">
      <Button onClick={()=> props.onClickingSell(coffee.id)}>Sell 1 pound</Button>
      <Button onClick={ props.onClickingEdit }>Edit Item</Button>
      <Button onClick={()=> props.onClickingDelete(coffee.id)}>Delete Coffee</Button>
      </ButtonGroup>
      </Card>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
};

export default CoffeeDetail;