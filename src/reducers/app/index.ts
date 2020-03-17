import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import adminReducer from '../../app/admin/reducers';
import authReducer from '../../app/auth/reducers';
import uiReducer from '../../app/ui/reducers';
import userReducer from '../../app/user/reducers';
import history from '../../history';

const appReducer = combineReducers({
  admin: adminReducer,
  auth: authReducer,
  router: connectRouter(history),
  ui: uiReducer,
  user: userReducer,
});

export default appReducer;
