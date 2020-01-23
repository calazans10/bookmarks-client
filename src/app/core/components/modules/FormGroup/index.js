import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input, ErrorMessage } from './style';

const FormGroup = ({ input, meta, label, type, mask, formatChars, autoFocus, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  const isInvalid = meta.touched && meta.error && !isFocused;

  const onFocus = () => setIsFocused(true);

  const onBlur = () => setIsFocused(false);

  return (
    <Container>
      <Label htmlFor={input.name}>{label}</Label>
      <Input
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
      {isInvalid && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Container>
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
