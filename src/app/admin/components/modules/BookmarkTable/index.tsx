import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../../../../core/components/modules/Table';
import TableRow from '../../../../core/components/modules/TableRow';
import TableColumn from '../../../../core/components/modules/TableColumn';
import { getBookmarks } from '../../../selectors';

export const BookmarkTable = ({ bookmarks }) => (
  <Table>
    <tbody>
      {bookmarks.map(bookmark => (
        <TableRow key={bookmark.id}>
          <TableColumn label="Title">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title}
            </a>
          </TableColumn>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

BookmarkTable.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  bookmarks: getBookmarks(state),
});

export default connect(mapStateToProps)(BookmarkTable);
