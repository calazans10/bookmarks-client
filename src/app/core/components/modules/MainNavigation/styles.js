import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.nav`
  margin-left: auto;
`;

export const Item = styled.li`
  display: inline-block;
  line-height: 26px;

  &:not(:last-child) {
    margin-right: ${rem('20px')};

    @media (min-width: 1044px) {
      margin-right: ${rem('30px')};
    }
  }
`;

export const Button = styled.button`
  padding: 0;
  transition: color 0.1s linear;
  border: none;
  background-color: transparent;
  background-image: none;
  color: #7d7c7a;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;

  &:hover {
  &:focus,
    color: #7d7c7a;
  }
`;
