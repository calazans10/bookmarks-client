import React from 'react';
import { connect } from 'react-redux';
import PageContent from 'app/core/components/modules/PageContent';
import BookmarkForm from 'app/user/components/modules/BookmarkForm';
import { doRequestCreateBookmark } from 'app/user/actions';
import { BookmarkData, UserActionTypes } from 'app/user/types';

type BookmarkCreateProps = {
  onRequestCreateBookmark: (data: BookmarkData) => UserActionTypes;
};

export const BookmarkCreate = ({ onRequestCreateBookmark }: BookmarkCreateProps) => {
  const onSubmit = async (values: BookmarkData) => {
    onRequestCreateBookmark(values);
  };

  return (
    <PageContent to="/bookmarks">
      <BookmarkForm legend="Add bookmark" action="Save" onSubmit={onSubmit} />
    </PageContent>
  );
};

const mapDispatchToProps = {
  onRequestCreateBookmark: doRequestCreateBookmark,
};

export default connect(null, mapDispatchToProps)(BookmarkCreate);
