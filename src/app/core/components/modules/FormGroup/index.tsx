import React from 'react';
import { Container, Label, Input, ErrorMessage } from './style';

type FormGroupProps = {
  name: string;
  label: string;
  type: string;
  autoFocus: boolean;
  disabled: boolean;
  defaultValue: string | number | ReadonlyArray<string>;
  /* eslint @typescript-eslint/no-explicit-any: "off" */
  inputRef: ((instance: any) => void) | React.RefObject<any> | null | undefined;
  error: string;
} & typeof defaultProps;

const defaultProps = {
  type: 'tel',
  autoFocus: false,
  disabled: false,
  defaultValue: '',
  error: '',
};

const FormGroup = ({
  name,
  label,
  type,
  autoFocus,
  disabled,
  defaultValue,
  inputRef,
  error,
}: FormGroupProps) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      type={type}
      autoFocus={autoFocus}
      disabled={disabled}
      placeholder={label}
      defaultValue={defaultValue}
      aria-invalid={!!error}
      ref={inputRef}
    />
    {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
  </Container>
);

FormGroup.defaultProps = defaultProps;

export default FormGroup;
