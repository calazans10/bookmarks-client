import React from 'react';
import { connect } from 'react-redux';
import { getBookmarks } from 'app/admin/selectors';
import { Bookmark, RootState } from 'app/admin/types';
import Table from 'app/core/components/modules/Table';
import TableRow from 'app/core/components/modules/TableRow';
import TableColumn from 'app/core/components/modules/TableColumn';

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

const mapStateToProps = (state: RootState) => ({
  bookmarks: getBookmarks(state),
});

export default connect(mapStateToProps)(BookmarkTable);
