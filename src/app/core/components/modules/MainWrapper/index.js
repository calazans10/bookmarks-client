import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../../../../ui/components/modules/Alert';
import './index.scss';

const MainWrapper = ({ children }) => (
  <div className="main-wrapper">
    <Alert />
    {children}
  </div>
);

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
