import { AxiosResponse } from "axios";
import { Product } from "../redux/reducers/products";
import { api } from "./axiosInstance"

export type ResponseProduct<T> = {
  data: {
    products: T[],
  };
  status: string;
}
export const getAllProducts = () => {
  return api.get<AxiosResponse<ResponseProduct<Product>>>('products ');
}