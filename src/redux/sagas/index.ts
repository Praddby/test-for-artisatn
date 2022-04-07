import { all, spawn } from 'redux-saga/effects';
import { productsSaga } from './products';

export function* rootSaga() {
  const sagas = [productsSaga];
  yield all(sagas.map((s) => spawn(s)));
}
