import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookmarkTable from '../../modules/BookmarkTable';
import PageContent from '../../../../core/components/modules/PageContent';
import PageNavigation from '../../../../core/components/modules/PageNavigation';
import Pagination from '../../../../core/components/modules/Pagination';
import { doChangeBookmarksMeta, doRequestGetBookmarks } from '../../../actions';
import {
  getBookmarksCount,
  getBookmarksLimit,
  getBookmarksOffset,
  getBookmarksTotal,
} from '../../../selectors';

export const BookmarkList = ({
  count,
  offset,
  limit,
  total,
  onChangeBookmarksMeta,
  onRequestGetBookmarks,
}) => {
  useEffect(() => {
    onRequestGetBookmarks(offset, limit);
  }, [offset, limit, onRequestGetBookmarks]);

  const onChange = data => {
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

BookmarkList.propTypes = {
  count: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChangeBookmarksMeta: PropTypes.func.isRequired,
  onRequestGetBookmarks: PropTypes.func.isRequired,
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
