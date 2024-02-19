import buildAddToCart from "./addToCart-UseCase";
import buildCarts from "./carts-UseCase";
import buildDeleteFromCart from "./delete-UseCase";
import buildEditProduct from "./updateCartProduct-UseCase";
import { cartRepository } from "../database/index";

export const addToCartUseCase = buildAddToCart(cartRepository);
export const cartsUseCase = buildCarts(cartRepository);
export const deleteUseCase = buildDeleteFromCart(cartRepository);
export const editProductUseCase = buildEditProduct(cartRepository);
