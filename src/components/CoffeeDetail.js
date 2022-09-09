import React from 'react';
import PropTypes from 'prop-types';

function CoffeeDetail(props){
  const { coffee } = props;

  return (
    <React.Fragment>
      <h2>Coffee Details</h2>
      <h4>Name: {coffee.name}</h4>
      <h4>Roast: {coffee.roast}</h4>
      <h4>Origin: {coffee.origin}</h4>
      <h4>Price: {coffee.price}</h4>

      <button onClick={ props.onClickingEdit }>Edit Item</button>
      <hr/>
      <button onClick={()=> props.onClickingDelete(coffee.id)}>Delete Coffee</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default CoffeeDetail;