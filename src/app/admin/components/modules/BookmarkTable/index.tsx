import React from 'react';
import { connect } from 'react-redux';
import Table from '../../../../core/components/modules/Table';
import TableRow from '../../../../core/components/modules/TableRow';
import TableColumn from '../../../../core/components/modules/TableColumn';
import { getBookmarks } from '../../../selectors';
import { Bookmark } from '../../../types';

type BookmarkTableProps = {
  bookmarks: Bookmark[];
};

export const BookmarkTable = ({ bookmarks }: BookmarkTableProps) => (
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

const mapStateToProps = state => ({
  bookmarks: getBookmarks(state),
});

export default connect(mapStateToProps)(BookmarkTable);
