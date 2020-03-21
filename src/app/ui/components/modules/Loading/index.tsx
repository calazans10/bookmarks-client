import React from 'react';
import { connect } from 'react-redux';
import { isLoadingVisible } from '../../../selectors';
import { Container } from './style';

type LoadingProps = {
  isVisible: boolean;
};

export const Loading = ({ isVisible }: LoadingProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <p>Loading...</p>
    </Container>
  );
};

const mapStateToProps = state => ({
  isVisible: isLoadingVisible(state),
});

export default connect(mapStateToProps)(Loading);
