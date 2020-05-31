import React from 'react';
import { connect } from 'react-redux';
import Table from '../../../../core/components/modules/Table';
import TableRow from '../../../../core/components/modules/TableRow';
import TableColumn from '../../../../core/components/modules/TableColumn';
import { getUsers } from '../../../selectors';
import { User } from '../../../types';

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
