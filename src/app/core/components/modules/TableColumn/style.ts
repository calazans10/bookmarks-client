import styled, { css } from 'styled-components';
import { em, rem } from 'polished';

type ContainerProps = {
  hasActions: boolean;
};

export const Container = styled.td<ContainerProps>`
  display: block;

  &:before {
    content: attr(data-label);
    display: block;
    margin-bottom: ${rem('10px')};
    font-size: ${em('18px')};
    font-weight: 500;
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
