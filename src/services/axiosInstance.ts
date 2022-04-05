import axios from "axios";

const API_URL = 'https://artisant.io/api/';

export const api = axios.create({
  baseURL: API_URL,
});