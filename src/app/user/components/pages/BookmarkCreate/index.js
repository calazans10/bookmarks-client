import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookmarkForm from '../../modules/BookmarkForm';
import PageContent from '../../../../core/components/modules/PageContent';
import { doRequestCreateBookmark } from '../../../actions';

export const BookmarkCreate = ({ onRequestCreateBookmark }) => {
  const onSubmit = async values => {
    onRequestCreateBookmark(values);
  };

  return (
    <PageContent to="/bookmarks">
      <BookmarkForm legend="Add bookmark" action="Save" onSubmit={onSubmit} />
    </PageContent>
  );
};

BookmarkCreate.propTypes = {
  onRequestCreateBookmark: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRequestCreateBookmark: doRequestCreateBookmark,
};

export default connect(null, mapDispatchToProps)(BookmarkCreate);
