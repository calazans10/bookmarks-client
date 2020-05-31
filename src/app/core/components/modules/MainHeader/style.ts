import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.header`
  padding: ${rem('20px')};
  border-bottom: ${rem('1px')} solid #efefef;
  background-color: #f8f8f8;

  a {
    color: #7d7c7a;

    &:focus,
    &:hover {
      color: #7d7c7a;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-content: center;

  @media (min-width: 1044px) {
    max-width: ${rem('1044px')};
    margin-right: auto;
    margin-left: auto;
  }
`;
