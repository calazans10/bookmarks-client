import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { em } from 'polished';

export const Container = styled.div`
  flex: 1;
`;

export const StyledLink = styled(Link)`
  font-size: ${em('22px')};
  font-weight: 400;
`;
