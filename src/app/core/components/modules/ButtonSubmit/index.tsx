import React from 'react';
import { Button } from './style';

type ButtonSubmitProps = {
  children: React.ReactNode;
};

const ButtonSubmit = ({ children }: ButtonSubmitProps) => <Button type="submit">{children}</Button>;

export default ButtonSubmit;
