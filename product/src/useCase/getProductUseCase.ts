import { ProductRepoType } from "../database/index.js";

export default function buildGetProduct(productList: ProductRepoType) {
  return async function getProduct({ id }: { id: string }) {
    if(!id) throw new Error("Product id is missing");
    
    return await productList.getProduct(id);
  };
}
