import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './style';

const ButtonSubmit = ({ children }) => <Button type="submit">{children}</Button>;

ButtonSubmit.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonSubmit;
