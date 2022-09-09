import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm (props) {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({name: event.target.name.value, roast: event.target.roast.value, origin: event.target.origin.value, price: event.target.price.value, id: coffee.id})
  }
  return (
    <React.Fragment>
      <ReusableForm
      
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Item"/>
    </React.Fragment>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;