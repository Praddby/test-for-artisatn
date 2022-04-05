import { put, call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Product } from '../reducers/products';
import { getAllProducts } from '../../services';
import { getAllProductsFail, getAllProductsSuccess, GET_ALL_PRODUCTS_SUCCESS } from '../actions/products';

export function* productsWorker(): any {
  try {
    const { data }: AxiosResponse<Product> = yield call(getAllProducts);
    console.log(data);
    yield put(getAllProductsSuccess({ product: data }));
  } catch (error) {
    yield put(getAllProductsFail(error));
  }
}

export function* productSaga() {
  yield takeEvery(GET_ALL_PRODUCTS_SUCCESS, productsWorker);
}
