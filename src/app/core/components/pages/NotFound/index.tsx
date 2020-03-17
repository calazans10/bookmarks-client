import React from 'react';
import { useHistory } from 'react-router-dom';
import MainWrapper from '../../modules/MainWrapper';
import MainContent from '../../modules/MainContent';
import PageSection from '../../modules/PageSection';
import ButtonLink from '../../modules/ButtonLink';

const NotFound = () => {
  const history = useHistory();

  return (
    <MainWrapper>
      <MainContent>
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
};

export default NotFound;
