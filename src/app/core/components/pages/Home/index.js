import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../modules/Logo';
import MainWrapper from '../../modules/MainWrapper';
import MainHeader from '../../modules/MainHeader';
import MainNavigation from '../../modules/MainNavigation';
import MainContent from '../../modules/MainContent';
import PageSection from '../../modules/PageSection';

export const Home = () => (
  <MainWrapper>
    <MainHeader>
      <Logo />
      <MainNavigation pathname="/sign_in" title="Sign In" />
    </MainHeader>
    <MainContent>
      <PageSection title="A smarter way to save your web pages">
        <p>
          Bookmarks makes it simple to save web pages you find useful, interesting, or inspiring in
          a beautiful, easy-to-use web app.
        </p>
        <p>
          Don&apos;t have an account? <Link to="/sign_up">Sign up here</Link>.
        </p>
      </PageSection>
    </MainContent>
  </MainWrapper>
);

export default Home;
