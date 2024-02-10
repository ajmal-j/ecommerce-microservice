import { buildAddProduct } from "./addProduct-UseCase";
import { productRepository } from "../database/index";
import buildDeleteProduct from "./deleteProduct-UseCase";
import buildGetProduct from "./getProduct-UseCase";
import buildGetProducts from "./getProducts-UseCase";
import buildAddToCart from "./addToCart-UseCase";
import addToCartEvent from "../event/producer/addToCart-Producer";

export const addProduct = buildAddProduct(productRepository);
export const getProduct = buildGetProduct(productRepository);
export const getProducts = buildGetProducts(productRepository);
export const deleteProduct = buildDeleteProduct(productRepository);
export const addToCart = buildAddToCart({
  productRepository,
  addToCartEvent,
});
