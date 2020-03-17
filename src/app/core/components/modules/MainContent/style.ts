import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.main`
  padding: ${rem('40px')} ${rem('20px')};

  @media (min-width: 1044px) {
    max-width: ${rem('1044px')};
    margin-right: auto;
    margin-left: auto;
  }
`;
