import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='roast'
          placeholder='Light, Medium, Dark, etc.' />
        <input
          type='text'
          name='origin'
          placeholder='Example: Costa Rica' />
        <input
          type='number'
          name='price'
          placeholder='Price'/>

        <Button variant="outlined" type='submit'>{props.buttonText}</Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;