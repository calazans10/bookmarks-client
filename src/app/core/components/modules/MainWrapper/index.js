import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../../../../ui/components/modules/Alert';
import { Container } from './styles';

const MainWrapper = ({ children }) => (
  <Container>
    <Alert />
    {children}
  </Container>
);

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
