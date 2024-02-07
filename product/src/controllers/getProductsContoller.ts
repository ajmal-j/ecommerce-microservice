import { getProducts } from "../useCase/index";

export function getProductsController() {
  return getProducts();
}
