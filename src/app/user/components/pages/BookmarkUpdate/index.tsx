import React from 'react';
import { connect } from 'react-redux';
import { doRequestUpdateBookmark } from 'app/user/actions';
import { getSelectedBookmark } from 'app/user/selectors';
import { Bookmark, BookmarkData, RootState, UserActionTypes } from 'app/user/types';
import PageContent from 'app/core/components/modules/PageContent';
import BookmarkForm from 'app/user/components/modules/BookmarkForm';

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

const mapStateToProps = (state: RootState) => ({
  bookmark: getSelectedBookmark(state),
});

const mapDispatchToProps = {
  onRequestUpdateBookmark: doRequestUpdateBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkUpdate);
