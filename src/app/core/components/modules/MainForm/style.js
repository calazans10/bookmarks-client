import styled from 'styled-components';
import { em, rem } from 'polished';

export const Container = styled.form`
  @media (min-width: 600px) {
    width: ${rem('522px')};
    margin: ${rem('60px')} auto;
  }

  @media (min-width: 800px) {
    margin-top: ${rem('100px')};
    margin-bottom: ${rem('100px')};
  }

  @media (min-width: 1044px) {
    width: ${rem('600px')};
  }

  a {
    margin-left: ${rem('10px')};
  }
`;

export const Legend = styled.legend`
  margin-bottom: ${rem('25px')};
  font-size: ${em('24px')};
  font-weight: 500;
`;
