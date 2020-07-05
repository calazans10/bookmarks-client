import React from 'react';
import ReactPaginate from 'react-paginate';
import { Container } from './style';

type PaginationProps = {
  initialPage: number;
  count: number;
  limit: number;
  total: number;
  onChange: (selectedItem: { selected: number }) => void;
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
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
        onPageChange={onChange}
      />
    </Container>
  );
};

export default Pagination;
