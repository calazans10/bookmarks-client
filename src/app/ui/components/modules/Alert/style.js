import styled from 'styled-components';
import { em, rem, math, stripUnit, hideVisually } from 'polished';
import alertIcon from '../../../../../images/alerticon.svg';
import closeIcon from '../../../../../images/closeicon.svg';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: ${props => (props.isVisible ? 0 : '-100%')};
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${rem('71px')};
  padding-right: ${rem('40px')};
  padding-left: ${rem('40px')};
  transition: top 0.5s;
  background: #e74c3c;
  color: #fff;
  box-shadow: 0 ${rem('1px')} ${rem('3px')} 0 rgba(0, 0, 0, 0.2);
  z-index: 1004;

  @media (min-width: 1044px) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Message = styled.p`
  display: flex;
  align-items: center;
  font-size: ${em('14px')};
  line-height: ${stripUnit(math('14px / 17px'))};
`;

export const Icon = styled.span`
  display: block;
  width: ${rem('20px')};
  height: ${rem('20px')};
  margin-right: ${rem('20px')};
  background: url(${alertIcon}) center center no-repeat;
  background-size: 100% 100%;
`;

export const Button = styled.button`
  display: block;
  width: ${rem('16px')};
  height: ${rem('16px')};
  margin-left: ${rem('20px')};
  border: none;
  background: url(${closeIcon}) center center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  span {
    ${hideVisually()};
  }
`;
