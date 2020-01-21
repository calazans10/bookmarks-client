import styled from 'styled-components';
import { em, rem } from 'polished';

export const Container = styled.section`
  text-align: center;

  @media (min-width: 600px) {
    margin-top: ${rem('150px')};
    margin-bottom: ${rem('60px')};
  }

  @media (min-width: 650px) {
    width: ${rem('650px')};
    margin-right: auto;
    margin-left: auto;
  }

  p {
    line-height: 1.5;
  }
`;

export const Title = styled.h1`
  margin-bottom: ${rem('50px')};
  font-size: ${em('34px')};
  font-weight: 400;
`;
