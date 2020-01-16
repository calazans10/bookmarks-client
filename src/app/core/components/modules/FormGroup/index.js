import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormLabel from './atoms/FormLabel';
import FormInput from './atoms/FormInput';
import FormError from './atoms/FormError';
import './index.scss';

const FormGroup = ({ input, meta, label, type, mask, formatChars, autoFocus, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  const isInvalid = meta.touched && meta.error && !isFocused;

  const divClass = classNames({
    'form-group': true,
    'form-group--invalid': isInvalid,
  });

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={divClass}>
      <FormLabel htmlFor={input.name}>{label}</FormLabel>
      <FormInput
        input={input}
        type={type}
        mask={mask}
        formatChars={formatChars}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={label}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isInvalid && <FormError>{meta.error}</FormError>}
    </div>
  );
};

FormGroup.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.string,
  formatChars: PropTypes.object,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

FormGroup.defaultProps = {
  label: '',
  type: 'tel',
  mask: '',
  formatChars: { 9: '[0-9]', '?': '[0-9]' },
  autoFocus: false,
  disabled: false,
};

export default FormGroup;
