import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserTable from '../../modules/UserTable';
import PageContent from '../../../../core/components/modules/PageContent';
import PageNavigation from '../../../../core/components/modules/PageNavigation';
import Pagination from '../../../../core/components/modules/Pagination';
import { doRequestGetUsers } from '../../../actions';
import { getUsersCount, getUsersLimit, getUsersOffset, getUsersTotal } from '../../../selectors';
import { isPaginationVisible } from '../../../../../lib/utils';

export const UserList = ({ count, offset, limit, total, onRequestGetUsers }) => {
  useEffect(() => {
    onRequestGetUsers(offset, limit);
  }, [offset, limit, onRequestGetUsers]);

  const onChange = data => {
    const { selected } = data;
    onRequestGetUsers(selected + 1, limit);
  };

  return (
    <PageContent to="/admin/bookmarks">
      <PageNavigation pathname="/admin/bookmarks" title="Bookmarks list" />
      <UserTable />
      {isPaginationVisible(count, limit, total) && (
        <Pagination initialPage={offset - 1} pageCount={total / limit} onChange={onChange} />
      )}
    </PageContent>
  );
};

UserList.propTypes = {
  count: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRequestGetUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: getUsersCount(state),
  offset: getUsersOffset(state),
  limit: getUsersLimit(state),
  total: getUsersTotal(state),
});

const mapDispatchToProps = {
  onRequestGetUsers: doRequestGetUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
