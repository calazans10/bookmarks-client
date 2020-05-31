import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'app/admin/selectors';
import { User } from 'app/admin/types';
import Table from 'app/core/components/modules/Table';
import TableRow from 'app/core/components/modules/TableRow';
import TableColumn from 'app/core/components/modules/TableColumn';

type UserTableProps = {
  users: User[];
};

export const UserTable = ({ users }: UserTableProps) => (
  <Table>
    <tbody>
      {users.map(user => (
        <TableRow key={user.id}>
          <TableColumn label="Name">{user.name}</TableColumn>
          <TableColumn label="Email">{user.email}</TableColumn>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => ({
  users: getUsers(state),
});

export default connect(mapStateToProps)(UserTable);
