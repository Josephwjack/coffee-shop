import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Card, Typography} from '@mui/material';




function CoffeeDetail(props){
  const { coffee } = props;

  return (
    <React.Fragment>
      <Card >
      <Typography component={'span'} variant={'body2'}>
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
      </Typography>
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