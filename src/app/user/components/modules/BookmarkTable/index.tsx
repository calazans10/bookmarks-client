import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../../../core/components/modules/Table';
import TableRow from '../../../../core/components/modules/TableRow';
import TableColumn from '../../../../core/components/modules/TableColumn';
import ButtonAction from '../ButtonAction';
import Confirm from '../../../../ui/components/modules/Confirm';
import { doRequestDeleteBookmark, doChangeSelectedBookmark } from '../../../actions';
import { doChangeLocation } from '../../../../router/actions';
import { doShowConfirm } from '../../../../ui/actions';
import { getBookmarks } from '../../../selectors';
import { Bookmark, UserActionTypes } from '../../../types';
import { RouterActionTypes } from '../../../../router/types';
import { UIActionTypes } from '../../../../ui/types';

type BookmarkTableProps = {
  bookmarks: Bookmark[];
  onChangeLocation: (pathname: string) => RouterActionTypes;
  onShowConfirm: () => UIActionTypes;
  onChangeSelectedBookmark: (bookmark: Bookmark) => UserActionTypes;
  onRequestDeleteBookmark: (bookmarkId: string) => UserActionTypes;
};

export const BookmarkTable = ({
  bookmarks,
  onChangeLocation,
  onShowConfirm,
  onChangeSelectedBookmark,
  onRequestDeleteBookmark,
}: BookmarkTableProps) => {
  const [selectedBookmark, setSelectedBookmark] = useState<Bookmark | null>(null);

  return (
    <>
      <Table>
        <tbody>
          {bookmarks.map(bookmark => (
            <TableRow key={bookmark.id}>
              <TableColumn label="Title">
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                  {bookmark.title}
                </a>
              </TableColumn>
              <TableColumn label="Actions" hasActions>
                <ButtonAction
                  kind="success"
                  onClick={() => {
                    onChangeSelectedBookmark(bookmark);
                    onChangeLocation(`/bookmarks/${bookmark.id}/edit`);
                  }}
                >
                  Edit
                </ButtonAction>
                <ButtonAction
                  kind="danger"
                  onClick={() => {
                    setSelectedBookmark(bookmark);
                    onShowConfirm();
                  }}
                >
                  Delete
                </ButtonAction>
              </TableColumn>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Confirm
        kind="danger"
        title="Delete bookmark"
        text="Are you sure you want to delete this bookmark?"
        cancelAction="Close"
        confirmAction="Delete"
        isTightened
        onClick={() => onRequestDeleteBookmark(selectedBookmark.id)}
      />
    </>
  );
};

const mapStateToProps = state => ({
  bookmarks: getBookmarks(state),
});

const mapDispatchToProps = {
  onChangeLocation: doChangeLocation,
  onShowConfirm: doShowConfirm,
  onChangeSelectedBookmark: doChangeSelectedBookmark,
  onRequestDeleteBookmark: doRequestDeleteBookmark,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkTable);
