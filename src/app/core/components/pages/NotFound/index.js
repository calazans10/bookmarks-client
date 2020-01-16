import React from 'react';
import PropTypes from 'prop-types';
import MainWrapper from '../../modules/MainWrapper';
import MainContent from '../../modules/MainContent';
import PageSection from '../../modules/PageSection';
import ButtonLink from '../../modules/ButtonLink';

const NotFound = ({ history }) => (
  <MainWrapper>
    <MainContent title="Page not found">
      <PageSection title="404 - Page not found">
        <p>Sorry, the page you were looking for cannot be found!</p>
        <p>
          Do you want to go back to where you were?{' '}
          <ButtonLink onClick={() => history.goBack()}>Click here</ButtonLink>.
        </p>
      </PageSection>
    </MainContent>
  </MainWrapper>
);

NotFound.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NotFound;
