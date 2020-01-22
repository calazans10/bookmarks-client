import styled, { css } from 'styled-components';
import { em, rem } from 'polished';

export const Container = styled.td`
  display: block;

  &:before {
    display: block;
    margin-bottom: ${rem('10px')};
    font-size: ${em('18px')};
    font-weight: 500;
    content: attr(data-label);
  }

  &:not(:last-child) {
    margin-bottom: ${rem('20px')};
  }

  @media (min-width: 600px) {
    display: table-cell;
    padding: ${rem('12px')};

    &:before {
      display: none;
    }

    &:not(:last-child) {
      margin-bottom: 0;
    }

    ${props =>
      props.hasActions &&
      css`
        width: 40%;
        text-align: right;
      `}
  }
`;
