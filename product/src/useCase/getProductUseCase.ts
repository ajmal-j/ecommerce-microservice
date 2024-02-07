import { ProductRepoType } from "../database/index.js";

export default function buildGetProduct(productList: ProductRepoType) {
  return async function getProduct({ id }: { id: string }) {
    return await productList.getProduct(id);
  };
}
