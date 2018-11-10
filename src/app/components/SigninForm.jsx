import React from 'react';
import {Field, reduxForm} from "redux-form";
import renderFlatTextField from "./forms/FlatTextField";
import {Button} from "reactstrap";
import {validateEmail} from "../utils/validators";

let SigninForm = props => {
  let {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <Field
        name='email'
        type='email'
        placeholder='E-mail'
        component={renderFlatTextField}
      />
      <Field
        name='password'
        type='password'
        placeholder='Password'
        component={renderFlatTextField}
      />

      <Button type="submit" color='primary' className='w-100'>Submit</Button>
    </form>
  )
};

const validate = (values, props) => ({
  ...validateEmail(values.email)
});

SigninForm = reduxForm({
  form: 'signinForm',
  validate
})(SigninForm);


export default SigninForm;