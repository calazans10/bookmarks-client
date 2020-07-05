import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { doChangeUsersMeta, doRequestGetUsers } from 'app/admin/actions';
import { getUsersCount, getUsersLimit, getUsersOffset, getUsersTotal } from 'app/admin/selectors';
import { RootState, AdminActionTypes } from 'app/admin/types';
import UserTable from 'app/admin/components/modules/UserTable';
import PageContent from 'app/core/components/modules/PageContent';
import PageNavigation from 'app/core/components/modules/PageNavigation';
import Pagination from 'app/core/components/modules/Pagination';

type UserListProps = {
  count: number;
  offset: number;
  limit: number;
  total: number;
  onChangeUsersMeta: (
    count: number,
    offset: number,
    limit: number,
    total: number
  ) => AdminActionTypes;
  onRequestGetUsers: (offset: number, limit: number) => AdminActionTypes;
};

export const UserList = ({
  count,
  offset,
  limit,
  total,
  onChangeUsersMeta,
  onRequestGetUsers,
}: UserListProps) => {
  useEffect(() => {
    onRequestGetUsers(offset, limit);
  }, [offset, limit, onRequestGetUsers]);

  const onChange = (data: { selected: number }) => {
    const { selected } = data;
    onChangeUsersMeta(count, selected + 1, limit, total);
  };

  return (
    <PageContent to="/admin/bookmarks">
      <PageNavigation pathname="/admin/bookmarks" title="Bookmarks list" />
      <UserTable />
      <Pagination
        initialPage={offset - 1}
        count={count}
        limit={limit}
        total={total}
        onChange={onChange}
      />
    </PageContent>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: getUsersCount(state),
  offset: getUsersOffset(state),
  limit: getUsersLimit(state),
  total: getUsersTotal(state),
});

const mapDispatchToProps = {
  onChangeUsersMeta: doChangeUsersMeta,
  onRequestGetUsers: doRequestGetUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
