import React, { useState } from 'react';
import { FieldInputProps, FieldMetaState } from 'react-final-form';
import { Container, Label, Input, ErrorMessage } from './style';

type FormGroupProps = {
  /* eslint @typescript-eslint/no-explicit-any: "off" */
  input: FieldInputProps<any, HTMLElement>;
  meta: FieldMetaState<any>;
  label: string;
  type: string;
  mask: string;
  autoFocus: boolean;
  disabled: boolean;
} & typeof defaultProps;

const defaultProps = {
  label: '',
  type: 'tel',
  mask: '',
  autoFocus: false,
  disabled: false,
};

const FormGroup = ({ input, meta, label, type, mask, autoFocus, disabled }: FormGroupProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const isInvalid = meta.touched && meta.error && !isFocused;

  const onFocus = () => setIsFocused(true);

  const onBlur = () => setIsFocused(false);

  return (
    <Container>
      <Label htmlFor={input.name}>{label}</Label>
      <Input
        {...input}
        id={input.name}
        type={type}
        mask={mask}
        formatChars={{ 9: '[0-9]', '?': '[0-9]' }}
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

FormGroup.defaultProps = defaultProps;

export default FormGroup;
