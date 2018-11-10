import React from 'react';
import {FormGroup, Input} from "reactstrap";

const renderFlatTextField = props => {
  let {input, placeholder, type, className, errorMsgClassName, meta: {touched, error}} = props;
  className = className || 'flat-text-field';
  if (touched && error) className = className + ' flat-text-field-error';
  errorMsgClassName = errorMsgClassName || 'field-error-msg';

  return (
    <FormGroup>
      <Input {...input}
             placeholder={placeholder}
             type={type}
             className={className}
             required
      />
      {touched && error &&  <span className={errorMsgClassName}>{error}</span>}
    </FormGroup>
  )
};

export default renderFlatTextField;