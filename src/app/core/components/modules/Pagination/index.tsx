import React from 'react';
import ReactPaginate from 'react-paginate';
import { Container } from './style';

type PaginationProps = {
  initialPage: number;
  count: number;
  limit: number;
  total: number;
  onChange: (data: { selected: number }) => void;
};

const Pagination = ({ initialPage, count, limit, total, onChange }: PaginationProps) => {
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

export default Pagination;
