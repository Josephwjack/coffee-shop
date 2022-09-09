import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.roast} </h3>
      </div>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
};

export default Coffee;