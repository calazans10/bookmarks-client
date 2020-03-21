import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes';
import PrivateRoute from './core/components/modules/PrivateRoute';
import FallbackLoading from './core/components/modules/FallbackLoading';
import Loading from './ui/components/modules/Loading';

type AppProps = {
  history: any;
};

const App = ({ history }: AppProps) => (
  <>
    <Loading />
    <Suspense fallback={<FallbackLoading />}>
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.id} exact={route.exact} path={route.path}>
                <route.component />
              </PrivateRoute>
            ) : (
              <Route key={route.id} exact={route.exact} path={route.path}>
                <route.component />
              </Route>
            )
          )}
        </Switch>
      </ConnectedRouter>
    </Suspense>
  </>
);

export default App;
