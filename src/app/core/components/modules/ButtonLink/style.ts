import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  transition: color 0.1s linear;
  border: none;
  background-color: transparent;
  background-image: none;
  color: #2980b9;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;

  &:focus,
  &:hover {
    color: #20638f;
  }
`;
