import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { doChangeBookmarksMeta, doRequestGetBookmarks } from 'app/admin/actions';
import {
  getBookmarksCount,
  getBookmarksLimit,
  getBookmarksOffset,
  getBookmarksTotal,
} from 'app/admin/selectors';
import { AdminActionTypes } from 'app/admin/types';
import BookmarkTable from 'app/admin/components/modules/BookmarkTable';
import PageContent from 'app/core/components/modules/PageContent';
import PageNavigation from 'app/core/components/modules/PageNavigation';
import Pagination from 'app/core/components/modules/Pagination';

type BookmarkListProps = {
  count: number;
  offset: number;
  limit: number;
  total: number;
  onChangeBookmarksMeta: (
    count: number,
    offset: number,
    limit: number,
    total: number
  ) => AdminActionTypes;
  onRequestGetBookmarks: (offset: number, limit: number) => AdminActionTypes;
};

export const BookmarkList = ({
  count,
  offset,
  limit,
  total,
  onChangeBookmarksMeta,
  onRequestGetBookmarks,
}: BookmarkListProps) => {
  useEffect(() => {
    onRequestGetBookmarks(offset, limit);
  }, [offset, limit, onRequestGetBookmarks]);

  const onChange = (data: { selected: number }) => {
    const { selected } = data;
    onChangeBookmarksMeta(count, selected + 1, limit, total);
  };

  return (
    <PageContent to="/admin/bookmarks">
      <PageNavigation pathname="/admin/users" title="Users list" />
      <BookmarkTable />
      <Pagination
        initialPage={offset - 1}
        count={count}
        limit={limit}
        total={total}
        onChange={onChange}
      />
    </PageContent>
  );
};

const mapStateToProps = state => ({
  count: getBookmarksCount(state),
  offset: getBookmarksOffset(state),
  limit: getBookmarksLimit(state),
  total: getBookmarksTotal(state),
});

const mapDispatchToProps = {
  onChangeBookmarksMeta: doChangeBookmarksMeta,
  onRequestGetBookmarks: doRequestGetBookmarks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
