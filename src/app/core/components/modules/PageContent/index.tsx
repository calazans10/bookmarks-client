import React from 'react';
import Logo from '../Logo';
import MainWrapper from '../MainWrapper';
import MainHeader from '../MainHeader';
import MainNavigation from '../MainNavigation';
import MainContent from '../MainContent';

type PageContentProps = {
  to: string;
  children: React.ReactNode;
};

const PageContent = ({ to, children }: PageContentProps) => (
  <MainWrapper>
    <MainHeader>
      <Logo to={to} />
      <MainNavigation />
    </MainHeader>
    <MainContent>{children}</MainContent>
  </MainWrapper>
);

export default PageContent;
