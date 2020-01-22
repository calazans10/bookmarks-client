import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { em, rem } from 'polished';

export const Paginate = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    margin-right: ${rem('9px')};
  }

  li.previous {
    margin-right: auto;
  }

  li.next {
    margin-right: 0;
    margin-left: auto;
  }

  li:nth-last-child(2) {
    margin-right: 0;
  }

  li a {
    color: #2980b9;
    font-family: 'Gilroy SemiBold';
    font-size: ${em('14px')};
    line-height: lh(14px, 17px);
    cursor: pointer;

    &:focus,
    &:hover,
    &:active {
      color: #20638f;
    }
  }

  li.selected a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${rem('25px')};
    height: ${rem('25px')};
    border: ${rem('1px')} solid #2980b9;
    border-radius: ${rem('10px')};
    font-weight: bold;
  }

  li.previous a,
  li.next a {
    display: flex;
    align-items: center;
    font-size: ${em('12px')};
    text-transform: uppercase;
  }

  li.previous.disabled a,
  li.next.disabled a {
    color: #afbbd9;
    cursor: default;
    pointer-events: none;
  }
`;
