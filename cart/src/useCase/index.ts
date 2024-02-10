import buildAddToCart from "./addToCart-UseCase";
import buildCarts from "./carts-UseCase";
import buildDeleteFromCart from "./delete-UseCase";

import { cartRepository } from "../database/index";

export const addToCartUseCase = buildAddToCart(cartRepository);
export const cartsUseCase = buildCarts(cartRepository);
export const deleteUseCase = buildDeleteFromCart(cartRepository);
