import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MainForm = ({ legend, children, onSubmit }) => (
  <form autoComplete="off" noValidate className="main-form" onSubmit={onSubmit}>
    <fieldset>
      <legend className="main-form__legend">{legend}</legend>
      {children}
    </fieldset>
  </form>
);

MainForm.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MainForm;
