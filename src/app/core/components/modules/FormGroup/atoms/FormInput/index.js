import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const FormInput = ({
  input,
  type,
  mask,
  formatChars,
  autoFocus,
  disabled,
  placeholder,
  onFocus,
  onBlur,
}) => (
  <InputMask
    {...input}
    id={input.name}
    className="form-group__control"
    type={type}
    mask={mask}
    formatChars={formatChars}
    maskChar={null}
    onFocus={onFocus}
    onBlur={onBlur}
    autoFocus={autoFocus}
    disabled={disabled}
    placeholder={placeholder}
  />
);

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  formatChars: PropTypes.object.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export default FormInput;
