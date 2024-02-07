import { ProductRepoType } from "../database/index.js";

export default function buildDeleteProduct(productRepository: ProductRepoType) {
  return async function deleteProduct({ id }: { id: string }) {
    if(!id) throw new Error("Product id is missing");

    return await productRepository.delete(id);
  };
}
