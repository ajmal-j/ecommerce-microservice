import { ProductRepoType } from "../database/index.js";

export default function buildGetProducts(productList: ProductRepoType) {
  return async function getProducts() {
    return await productList.getProducts();
  };
}
