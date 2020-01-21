import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const PageNavigation = ({ pathname, title }) => (
  <Container>
    <ul>
      <li>
        <Link to={pathname}>{title}</Link>
      </li>
    </ul>
  </Container>
);

PageNavigation.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageNavigation;
