import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value, 
      roast: event.target.roast.value, 
      origin: event.target.origin.value, 
      id: v4()
      
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission} 
        buttonText="Add" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};

export default NewCoffeeForm;