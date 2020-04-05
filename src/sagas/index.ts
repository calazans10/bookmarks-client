import { all } from 'redux-saga/effects';
import { sagas as adminSagas } from '../app/admin';
import { sagas as authSagas } from '../app/auth';
import { sagas as routerSagas } from '../app/router';
import { sagas as userSagas } from '../app/user';

const sagas = [adminSagas, authSagas, routerSagas, userSagas].reduce(
  (result, array) => result.concat(array),
  []
);

export default function* rootSaga() {
  yield all(sagas);
}
