import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookmarkForm from '../../modules/BookmarkForm';
import PageContent from '../../../../core/components/modules/PageContent';
import { doRequestUpdateBookmark } from '../../../actions';
import { getSelectedBookmark } from '../../../selectors';

export const BookmarkUpdate = ({ bookmark, onRequestUpdateBookmark }) => {
  const onSubmit = async values => {
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

BookmarkUpdate.propTypes = {
  bookmark: PropTypes.object.isRequired,
  onRequestUpdateBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookmark: getSelectedBookmark(state),
});

const mapDispatchToProps = {
  onRequestUpdateBookmark: doRequestUpdateBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkUpdate);
