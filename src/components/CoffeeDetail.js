import React from 'react';
import PropTypes from 'prop-types';

function CoffeeDetail(props){
  const { coffee } = props;

  return (
    <React.Fragment>
      <h2>Coffee Details</h2>
      <h4>{coffee.name} - {coffee.roast}</h4>

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