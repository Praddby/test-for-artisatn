import { all, spawn } from 'redux-saga/effects';
import { productSaga } from './products';

export function* rootSaga() {
  const sagas = [productSaga];
  yield all(sagas.map((s) => spawn(s)));
}
