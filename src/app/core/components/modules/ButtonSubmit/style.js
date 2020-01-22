import styled from 'styled-components';
import { em, rem } from 'polished';

export const Button = styled.button`
  width: ${rem('140px')};
  padding: ${rem('10px')};
  border: none;
  background-color: #27ae60;
  color: #fff;
  font-size: ${em('13px')};
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }
`;
