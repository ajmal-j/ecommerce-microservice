import axios from "axios";
import { getLocalStorage } from "./localStorage";
import toast from "react-hot-toast";

const server = "http://ecom.com/";

export const productApi = axios.create({
  baseURL: `${server}api/product/`,
});
export const productApiWithToken = axios.create({
  baseURL: `${server}api/product/`,
});
export const authApi = axios.create({
  baseURL: `${server}api/auth/`,
});
export const cartApi = axios.create({
  baseURL: `${server}api/cart/`,
});
export const authApiWithToken = axios.create({
  baseURL: `${server}api/auth/`,
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
cartApi.interceptors.request.use(
  (config) => {
    const token = getLocalStorage();
    if (!token) {
      toast.error("Please log in.");
      return Promise.reject("not authorized");
    }
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
