import { buildAddProduct } from "./addProductUseCase";
import { productRepository } from "../database/index";
import buildDeleteProduct from "./deleteProductUseCase";
import buildGetProduct from "./getProductUseCase";
import buildGetProducts from "./getProductsUseCase";

export const addProduct = buildAddProduct(productRepository);
export const getProduct = buildGetProduct(productRepository);
export const getProducts = buildGetProducts(productRepository);
export const deleteProduct = buildDeleteProduct(productRepository);
