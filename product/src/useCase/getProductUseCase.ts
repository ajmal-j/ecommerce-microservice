import { ProductRepoType } from "../database/index.js";

export default function buildGetProduct(productList: ProductRepoType) {
  return async function getProduct(id: string) {
    return await productList.getProduct(id);
  };
}
