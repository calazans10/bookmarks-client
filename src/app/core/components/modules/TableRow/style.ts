import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.tr`
  display: block;
  padding: ${rem('30px')} ${rem('12px')};
  border-top: ${rem('2px')} solid #efefef;

  &:last-child {
    border-bottom: ${rem('2px')} solid #efefef;
  }

  &:nth-child(odd) {
    background-color: #fafafa;
  }

  @media (min-width: 600px) {
    display: table-row;
    padding: 0;
    border-bottom: ${rem('2px')} solid #efefef;
  }
`;
