import { createProduct } from "../product";
import { ProductRepoType } from "../database/index";
import { ProductObjectType } from "../database/model/product.model";

export function buildAddProduct(productRepository: ProductRepoType) {
  return async function addProduct(productData: ProductObjectType) {
    const productExist = await productRepository.getProductByName(
      productData.title
    );
    if (productExist) throw new Error("Product already exist");

    const product = createProduct(productData);
    return await productRepository.add(product);
  };
}
