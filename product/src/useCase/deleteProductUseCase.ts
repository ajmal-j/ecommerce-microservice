import { ProductRepoType } from "../database/index.js";

export default function buildDeleteProduct(productRepository: ProductRepoType) {
  return async function deleteProduct({ id }: { id: string }) {
    return await productRepository.delete(id);
  };
}
