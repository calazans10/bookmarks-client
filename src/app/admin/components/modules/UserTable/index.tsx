import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../../../../core/components/modules/Table';
import TableRow from '../../../../core/components/modules/TableRow';
import TableColumn from '../../../../core/components/modules/TableColumn';
import { getUsers } from '../../../selectors';

export const UserTable = ({ users }) => (
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

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  users: getUsers(state),
});

export default connect(mapStateToProps)(UserTable);
