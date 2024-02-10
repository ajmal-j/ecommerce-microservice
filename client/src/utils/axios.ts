import axios from "axios";
import { getLocalStorage } from "./localStorage";

const server = "http://localhost:";

export const productApi = axios.create({
  baseURL: `${server}4000/api/product/`,
});
export const productApiWithToken = axios.create({
  baseURL: `${server}4000/api/product/`,
});
export const authApi = axios.create({
  baseURL: `${server}3000/api/auth/`,
});
export const authApiWithToken = axios.create({
  baseURL: `${server}3000/api/auth/`,
});

authApiWithToken.interceptors.request.use(
  (config) => {
    const token = getLocalStorage();
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
productApiWithToken.interceptors.request.use(
  (config) => {
    const token = getLocalStorage();
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
