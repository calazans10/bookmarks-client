import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserTable from '../../modules/UserTable';
import PageContent from '../../../../core/components/modules/PageContent';
import PageNavigation from '../../../../core/components/modules/PageNavigation';
import Pagination from '../../../../core/components/modules/Pagination';
import { doChangeUsersMeta, doRequestGetUsers } from '../../../actions';
import { getUsersCount, getUsersLimit, getUsersOffset, getUsersTotal } from '../../../selectors';
import { AdminActionTypes } from '../../../types';

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

  const onChange = data => {
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

const mapStateToProps = state => ({
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
