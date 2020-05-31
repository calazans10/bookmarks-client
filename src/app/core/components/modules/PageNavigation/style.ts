import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  margin-bottom: ${rem('25px')};

  @media (min-width: 600px) {
    margin-top: ${rem('60px')};
  }
`;
