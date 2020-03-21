import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

type PageNavigationProps = {
  pathname: string;
  title: string;
};

const PageNavigation = ({ pathname, title }: PageNavigationProps) => (
  <Container>
    <ul>
      <li>
        <Link to={pathname}>{title}</Link>
      </li>
    </ul>
  </Container>
);

export default PageNavigation;
