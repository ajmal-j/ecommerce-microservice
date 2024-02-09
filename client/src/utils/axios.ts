import axios from "axios";

const server = "http://localhost:";

export const productApi = axios.create({
  baseURL: `${server}4000/api/product/`,
});
