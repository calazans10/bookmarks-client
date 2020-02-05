import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doRequestLogout } from '../../../../auth/actions';
import { Container, Item, Button } from './style';

export const MainNavigation = ({ pathname, title, onRequestLogout }) => (
  <Container>
    <ul>
      <Item>
        {pathname && title ? (
          <Link to={pathname}>{title}</Link>
        ) : (
          <Button type="button" onClick={onRequestLogout}>
            Sign Out
          </Button>
        )}
      </Item>
    </ul>
  </Container>
);

MainNavigation.propTypes = {
  pathname: PropTypes.string,
  title: PropTypes.string,
  onRequestLogout: PropTypes.func.isRequired,
};

MainNavigation.defaultProps = {
  pathname: '',
  title: '',
};

const mapDispatchToProps = {
  onRequestLogout: doRequestLogout,
};

export default connect(null, mapDispatchToProps)(MainNavigation);
