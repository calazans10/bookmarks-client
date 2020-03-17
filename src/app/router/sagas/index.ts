import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOCATION_CHANGE } from '../constants/actionTypes';

export function* handleChangeLocation(action) {
  const { pathname } = action.payload;
  yield put(push(pathname));
}

export default [takeLatest(LOCATION_CHANGE, handleChangeLocation)];
