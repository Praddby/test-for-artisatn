import { api } from "./axiosInstance"

export const getAllProducts = () => {
  return api.get('products ');
}