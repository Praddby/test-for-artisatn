import { put, call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Product } from '../reducers/products';
import { getAllProducts } from '../../services';
import { getAllProductsFail, getAllProducts as getAllProductsAction, GET_ALL_PRODUCTS_SUCCESS } from '../actions/products';
import { ResponseProduct } from '../../services/Products';

export function* productsWorker() {
  try {
    const { data }: AxiosResponse<ResponseProduct<Product>> = yield call(getAllProducts);
    yield put(getAllProductsAction(data.data.products));
  } catch (error) {
    yield put(getAllProductsFail(error));
  }
}

export function* productsSaga() {
  yield takeEvery(GET_ALL_PRODUCTS_SUCCESS, productsWorker);
}
