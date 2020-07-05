import React from 'react';
import { connect } from 'react-redux';
import { isLoadingVisible } from 'app/ui/selectors';
import { RootState } from 'app/ui/types';
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

const mapStateToProps = (state: RootState) => ({
  isVisible: isLoadingVisible(state),
});

export default connect(mapStateToProps)(Loading);
