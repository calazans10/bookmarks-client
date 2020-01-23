import styled from 'styled-components';
import { em, rem } from 'polished';

const theme = {
  success: '#27ae60',
  danger: '#e74c3c',
};

export const Button = styled.button`
  width: ${rem('100px')};
  padding: ${rem('8px')};
  background-color: ${props => theme[props.theme.main]};
  border: none;
  color: #fff;
  font-size: ${em('10px')};
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;

  &:focus,
  &:hover {
    color: #fff;
  }

  &:last-of-type {
    margin-left: ${rem('5px')};
  }
`;
