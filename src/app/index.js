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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign_in">
            <SignIn />
          </Route>
          <Route exact path="/sign_up">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/bookmarks">
            <BookmarkList />
          </PrivateRoute>
          <PrivateRoute exact path="/bookmarks/new">
            <BookmarkCreate />
          </PrivateRoute>
          <PrivateRoute exact path="/bookmarks/:id/edit">
            <BookmarkUpdate />
          </PrivateRoute>
          <PrivateRoute exact path="/admin/bookmarks">
            <AdminBookmarkList />
          </PrivateRoute>
          <PrivateRoute exact path="/admin/users">
            <AdminUserList />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Suspense>
  </>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
