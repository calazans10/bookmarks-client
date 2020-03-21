import React from 'react';
import { connect } from 'react-redux';
import BookmarkForm from '../../modules/BookmarkForm';
import PageContent from '../../../../core/components/modules/PageContent';
import { doRequestCreateBookmark } from '../../../actions';
import { BookmarkData, UserActionTypes } from '../../../types';

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
