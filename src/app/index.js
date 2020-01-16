import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './core/components/modules/PrivateRoute';
import FallbackLoading from './core/components/modules/FallbackLoading';
import Loading from './ui/components/modules/Loading';

const AdminBookmarkList = lazy(() => import('./admin/components/pages/BookmarkList'));
const AdminUserList = lazy(() => import('./admin/components/pages/UserList'));
const SignIn = lazy(() => import('./auth/components/pages/SignIn'));
const SignUp = lazy(() => import('./auth/components/pages/SignUp'));
const Home = lazy(() => import('./core/components/pages/Home'));
const NotFound = lazy(() => import('./core/components/pages/NotFound'));
const BookmarkList = lazy(() => import('./user/components/pages/BookmarkList'));
const BookmarkCreate = lazy(() => import('./user/components/pages/BookmarkCreate'));
const BookmarkUpdate = lazy(() => import('./user/components/pages/BookmarkUpdate'));

const App = ({ history }) => (
  <>
    <Loading />
    <Suspense fallback={<FallbackLoading />}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign_in" exact component={SignIn} />
          <Route path="/sign_up" exact component={SignUp} />
          <PrivateRoute path="/bookmarks" exact component={BookmarkList} />
          <PrivateRoute path="/bookmarks/new" exact component={BookmarkCreate} />
          <PrivateRoute path="/bookmarks/:id/edit" exact component={BookmarkUpdate} />
          <PrivateRoute path="/admin/bookmarks" exact component={AdminBookmarkList} />
          <PrivateRoute path="/admin/users" exact component={AdminUserList} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  </>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
