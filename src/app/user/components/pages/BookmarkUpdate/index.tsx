import React from 'react';
import { connect } from 'react-redux';
import BookmarkForm from '../../modules/BookmarkForm';
import PageContent from '../../../../core/components/modules/PageContent';
import { doRequestUpdateBookmark } from '../../../actions';
import { getSelectedBookmark } from '../../../selectors';
import { Bookmark, BookmarkData, UserActionTypes } from '../../../types';

type BookmarkUpdateProps = {
  bookmark: Bookmark;
  onRequestUpdateBookmark: (bookmarkId: string, data: BookmarkData) => UserActionTypes;
};

export const BookmarkUpdate = ({ bookmark, onRequestUpdateBookmark }: BookmarkUpdateProps) => {
  const onSubmit = async (values: BookmarkData) => {
    onRequestUpdateBookmark(bookmark.id, values);
  };

  return (
    <PageContent to="/bookmarks">
      <BookmarkForm
        legend="Edit bookmark"
        action="Update"
        title={bookmark.title}
        url={bookmark.url}
        onSubmit={onSubmit}
      />
    </PageContent>
  );
};

const mapStateToProps = state => ({
  bookmark: getSelectedBookmark(state),
});

const mapDispatchToProps = {
  onRequestUpdateBookmark: doRequestUpdateBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkUpdate);
