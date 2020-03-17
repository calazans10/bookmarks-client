import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookmarkTable from '../../modules/BookmarkTable';
import PageContent from '../../../../core/components/modules/PageContent';
import PageNavigation from '../../../../core/components/modules/PageNavigation';
import Pagination from '../../../../core/components/modules/Pagination';
import { doChangeMyBookmarksMeta, doRequestGetMyBookmarks } from '../../../actions';
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
  onChangeMyBookmarksMeta,
  onRequestGetMyBookmarks,
}) => {
  useEffect(() => {
    onRequestGetMyBookmarks(offset, limit);
  }, [offset, limit, onRequestGetMyBookmarks]);

  const onChange = data => {
    const { selected } = data;
    onChangeMyBookmarksMeta(count, selected + 1, limit, total);
  };

  return (
    <PageContent to="/bookmarks">
      <PageNavigation pathname="/bookmarks/new" title="Add bookmark" />
      <BookmarkTable hasActions />
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
  onChangeMyBookmarksMeta: PropTypes.func.isRequired,
  onRequestGetMyBookmarks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: getBookmarksCount(state),
  offset: getBookmarksOffset(state),
  limit: getBookmarksLimit(state),
  total: getBookmarksTotal(state),
});

const mapDispatchToProps = {
  onChangeMyBookmarksMeta: doChangeMyBookmarksMeta,
  onRequestGetMyBookmarks: doRequestGetMyBookmarks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
