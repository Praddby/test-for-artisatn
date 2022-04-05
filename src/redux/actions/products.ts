import { Product } from '../reducers/products';

export const GET_ALL_PRODUCTS = '[PRODUCTS] ALL PRODUCTS';
export const GET_ALL_PRODUCTS_SUCCESS = '[PRODUCTS] ALL PRODUCTS SUCCESS';
export const GET_ALL_PRODUCTS_FAIL = '[PRODUCTS] ALL PRODUCTS FAIL';
export const GET_PRODUCTS = '[PRODUCTS] GET PRODUCTS';
export const GET_PRODUCT = '[PRODUCTS] GET PRODUCT';
export const FILTER_PRODUCT = '[PRODUCTS] FILTER PRODUCT';

export const getAllProducts = () => ({ type: GET_ALL_PRODUCTS } as const);

export const getAllProductsSuccess = (product: any) => ({ type: GET_ALL_PRODUCTS_SUCCESS, payload: product } as const);

export const getAllProductsFail = (error: any) => ({ type: GET_ALL_PRODUCTS_FAIL, payload: error } as const);

export const getProducts = () => ({ type: GET_PRODUCTS } as const);

export const getProduct = () => ({ type: GET_PRODUCT } as const);

export const filterProducts = () => ({ type: FILTER_PRODUCT } as const);
