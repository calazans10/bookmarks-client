import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookmarkTable from '../../modules/BookmarkTable';
import PageContent from '../../../../core/components/modules/PageContent';
import PageNavigation from '../../../../core/components/modules/PageNavigation';
import Pagination from '../../../../core/components/modules/Pagination';
import { doRequestGetBookmarks } from '../../../actions';
import {
  getBookmarksCount,
  getBookmarksLimit,
  getBookmarksOffset,
  getBookmarksTotal,
} from '../../../selectors';
import { isPaginationVisible } from '../../../../../lib/utils';

export const BookmarkList = ({ count, offset, limit, total, onRequestGetBookmarks }) => {
  useEffect(() => {
    onRequestGetBookmarks(offset, limit);
  }, [offset, limit, onRequestGetBookmarks]);

  const onChange = data => {
    const { selected } = data;
    onRequestGetBookmarks(selected + 1, limit);
  };

  return (
    <PageContent to="/admin/bookmarks">
      <PageNavigation pathname="/admin/users" title="Users list" />
      <BookmarkTable />
      {isPaginationVisible(count, limit, total) && (
        <Pagination initialPage={offset - 1} pageCount={total / limit} onChange={onChange} />
      )}
    </PageContent>
  );
};

BookmarkList.propTypes = {
  count: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRequestGetBookmarks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: getBookmarksCount(state),
  offset: getBookmarksOffset(state),
  limit: getBookmarksLimit(state),
  total: getBookmarksTotal(state),
});

const mapDispatchToProps = {
  onRequestGetBookmarks: doRequestGetBookmarks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
