import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import MainWrapper from '../MainWrapper';
import MainHeader from '../MainHeader';
import MainNavigation from '../MainNavigation';
import MainContent from '../MainContent';

const PageContent = ({ to, children }) => (
  <MainWrapper>
    <MainHeader>
      <Logo to={to} />
      <MainNavigation />
    </MainHeader>
    <MainContent>{children}</MainContent>
  </MainWrapper>
);

PageContent.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageContent;
