import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const PageSection = ({ title, children }) => (
  <section className="page-section">
    <h1 className="page-section__title">{title}</h1>
    {children}
  </section>
);

PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageSection;
