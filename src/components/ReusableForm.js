import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function ReusableForm(props) {
  const reusableFormStyles = {
    width: 'auto'
  }
  return (
    <React.Fragment>
      <div style={reusableFormStyles} className="form-group d-flex flex-row justify-content-center my-4">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="col my-2">
            <input
              className="mx-3"
              type='text'
              name='name'
              placeholder='Name' />
          </div>
          <div className="col my-2">
            <input
              className="mx-3"
              type='text'
              name='roast'
              placeholder='Light, Medium, Dark, etc.' />
          </div>
          <div className="col my-2">
            <input
              className="mx-3"
              type='text'
              name='origin'
              placeholder='Example: Costa Rica' />
          </div>
          <div className="col my-2">
            <input
              className="mx-3"
              type='number'
              name='price'
              placeholder='Price'/>
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="outlined" type='submit'>{props.buttonText}</Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;