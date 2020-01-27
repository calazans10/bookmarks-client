import styled, { css } from 'styled-components';
import { em, rem, math, stripUnit } from 'polished';

const theme = {
  dialog: {
    primary: {
      ht: {
        sm: `${rem('190px')}`,
        lg: `${rem('295px')}`,
      },
    },
    secondary: {
      ht: {
        sm: `${rem('230px')}`,
        lg: `${rem('230px')}`,
      },
    },
  },
  title: {
    primary: '#26256d',
    danger: '#f12b2b',
  },
  text: {
    primary: '#312f83',
    danger: '#f12b2b',
  },
  button: {
    primary: {
      bg: '#1f1ed4',
      fg: '#fff',
    },
    secondary: {
      bg: 'transparent',
      fg: '#1f1ed4',
    },
    danger: {
      bg: '#f12b2b',
      fg: '#fff',
    },
  },
};

export const Container = styled.div`
  transition: opacity 0.3s ease-in;
  background-color: rgba(0, 0, 24, 0.79);
  opacity: 0;
  z-index: 1004;

  ${props =>
    props.isVisible &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      opacity: 1;
    `}
`;

export const Dialog = styled.div`
  position: fixed;
  top: -100vh;
  left: calc(50% - 145px);
  width: ${rem('290px')};
  height: ${props => theme.dialog[props.theme.main].ht.sm};
  transition: all 0.3s ease-in;
  z-index: 1001;

  @media (min-width: 750px) {
    left: calc(50% - 227px);
    width: ${rem('454px')};
    height: ${props => theme.dialog[props.theme.main].ht.lg};
  }

  ${props =>
    props.isHidden &&
    css`
      top: -100vh;
      opacity: 0;
    `}

  ${props =>
    props.isVisible &&
    css`
      top: calc(40% - 95px);
      opacity: 1;

      @media (min-width: 750px) {
        top: ${rem('140px')};
      }
    `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${rem('30px')};
  border-radius: ${rem('6px')};
  background-color: #fff;
  box-shadow: 0 ${rem('2px')} ${rem('70px')} 0 rgba(88, 85, 231, 0.2);

  @media (min-width: 750px) {
    padding: ${rem('30px')};
  }
`;

export const Title = styled.p`
  margin-bottom: ${rem('18px')};
  color: ${props => theme.title[props.theme.main]};
  font-size: ${em('20px')};
  font-weight: 700;
  line-height: ${stripUnit(math('20px / 24px'))};

  @media (min-width: 750px) {
    margin-bottom: ${rem('21px')};
    font-size: ${em('22px')};
    line-height: ${stripUnit(math('22px / 26px'))};
  }
`;

export const Text = styled.p`
  width: 100%;
  color: ${props => theme.text[props.theme.main]};
  font-size: ${em('14px')};
  line-height: ${stripUnit(math('14px / 17px'))};

  @media (min-width: 750px) {
    width: ${rem('344px')};
    font-size: ${em('16px')};
    line-height: ${stripUnit(math('16px / 19px'))};
  }
`;

export const Footer = styled.div`
  display: flex;
  position: absolute;
  right: ${rem('30px')};
  bottom: ${rem('30px')};
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  height: ${rem('50px')};
  border: none;
  border-color: transparent;
  background-color: ${props => theme.button[props.theme.main].bg};
  background-image: none;
  color: ${props => theme.button[props.theme.main].fg};
  font-size: ${em('14px')};
  font-weight: 600;
  line-height: ${stripUnit(math('14px / 17px'))};
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;

  &:first-of-type {
    margin-right: ${rem('22px')};
    padding: 0;
    background-color: transparent;

    @media (min-width: 750px) {
      margin-right: ${rem('37.5px')};
    }
  }

  &:last-of-type {
    padding: ${rem('18px')} ${rem('26.5px')} ${rem('15px')};
    border-radius: ${rem('6px')};
  }
`;
