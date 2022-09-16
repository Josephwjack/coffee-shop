import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from '@mui/material';
import {Card} from 'reactstrap';



function CoffeeDetail(props){
  const { coffee } = props;

  return (
    <React.Fragment>
     <div className="col d-flex justify-content-center text-center">
    
      <Card style={{ width: '50rem', padding: '10px', margin: 0, float: 'none'}}>    
        <h2>Coffee Details</h2>
      
        <h4>Name: {coffee.name}</h4>
        

        <h4>Roast: {coffee.roast}</h4>
       
        <h4>Origin: {coffee.origin}</h4>
        <h4>Price: {parseInt(coffee.price)}</h4>
       

        <h4>Inventory: {parseInt(coffee.pounds)}lbs.</h4>
       
        <ButtonGroup variant="outlined" aria-label="large button group">
        <Button onClick={()=> props.onClickingSell(coffee.id)}>Sell 1 pound</Button>
        <Button onClick={ props.onClickingEdit }>Edit Item</Button>
        <Button onClick={()=> props.onClickingDelete(coffee.id)}>Delete Coffee</Button>
        </ButtonGroup>
        </Card>
      </div>
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