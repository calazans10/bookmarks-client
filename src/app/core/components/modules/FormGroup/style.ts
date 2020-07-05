import styled from 'styled-components';
import { em, rem } from 'polished';

export const Container = styled.div`
  margin-bottom: ${rem('20px')};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${rem('5px')};
  font-weight: 500;
  letter-spacing: 1.25px;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${rem('12px')};
  border: ${rem('1px')} solid #e3e3e3;
  background: #fff;
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: ${rem('5px')};
  color: #e74c3c;
  font-size: ${em('14px')};
`;
