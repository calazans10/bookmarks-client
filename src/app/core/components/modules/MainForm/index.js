import React from 'react';
import PropTypes from 'prop-types';
import { Container, Legend } from './style';

const MainForm = ({ legend, children, onSubmit }) => (
  <Container autoComplete="off" noValidate onSubmit={onSubmit}>
    <fieldset>
      <Legend>{legend}</Legend>
      {children}
    </fieldset>
  </Container>
);

MainForm.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MainForm;
