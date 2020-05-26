import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doRequestLogout } from '../../../../auth/actions';
import { AuthActionTypes } from '../../../../auth/types';
import { Container, Item, Button } from './style';

type MainNavigationProps = {
  pathname: string;
  title: string;
  onRequestLogout: () => AuthActionTypes;
} & typeof defaultProps;

const defaultProps = {
  pathname: '',
  title: '',
};

export const MainNavigation = ({
  pathname,
  title,
  onRequestLogout,
}: MainNavigationProps) => (
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

MainNavigation.defaultProps = defaultProps;

const mapDispatchToProps = {
  onRequestLogout: doRequestLogout,
};

export default connect(null, mapDispatchToProps)(MainNavigation);
