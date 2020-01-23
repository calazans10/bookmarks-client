import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.table`
  width: 100%;
  margin-bottom: ${rem('40px')};
  border-right: ${rem('2px')} solid #efefef;
  border-left: ${rem('2px')} solid #efefef;
  border-collapse: collapse;
  border-spacing: 0;

  @media (min-width: 600px) {
    margin: 0 auto ${rem('40px')};
  }
`;
