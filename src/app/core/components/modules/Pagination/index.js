import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Container } from './style';

const Pagination = ({ initialPage, pageCount, onChange }) => (
  <Container>
    <ReactPaginate
      previousLabel="< Previous"
      nextLabel="Next >"
      initialPage={initialPage}
      pageCount={Math.ceil(pageCount)}
      containerClassName="pagination"
      onPageChange={onChange}
    />
  </Container>
);

Pagination.propTypes = {
  initialPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
