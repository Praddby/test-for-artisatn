import { createSelector, Selector } from 'reselect';
import { initProducts, Product } from '../reducers/products';
import { RootState } from '../store';

export const getStateProducts = (state: RootState): initProducts => state.products;

export const getProducts = createSelector<[Selector<RootState, initProducts>], Product[]>(
  getStateProducts,
  ({ products }) => products,
);
