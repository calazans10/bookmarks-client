import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doChangeLocation } from 'app/router/actions';
import { doShowConfirm } from 'app/ui/actions';
import { doRequestDeleteBookmark, doChangeSelectedBookmark } from 'app/user/actions';
import { getBookmarks } from 'app/user/selectors';
import { RouterActionTypes } from 'app/router/types';
import { UIActionTypes } from 'app/ui/types';
import { Bookmark, UserActionTypes } from 'app/user/types';
import Table from 'app/core/components/modules/Table';
import TableRow from 'app/core/components/modules/TableRow';
import TableColumn from 'app/core/components/modules/TableColumn';
import Confirm from 'app/ui/components/modules/Confirm';
import ButtonAction from '../ButtonAction';

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
        onClick={() => onRequestDeleteBookmark(selectedBookmark!.id)}
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
