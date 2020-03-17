import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Container } from './style';

const Pagination = ({ initialPage, count, limit, total, onChange }) => {
  const isVisible = count <= total && total > limit;

  if (!isVisible) {
    return null;
  }

  return (
    <Container>
      <ReactPaginate
        previousLabel="< Previous"
        nextLabel="Next >"
        initialPage={initialPage}
        pageCount={Math.ceil(total / limit)}
        containerClassName="pagination"
        onPageChange={onChange}
      />
    </Container>
  );
};

Pagination.propTypes = {
  initialPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
