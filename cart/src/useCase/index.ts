import buildAddToCart from "./addToCart-UseCase";
import buildCarts from "./carts-UseCase";

import { cartRepository } from "../database/index";

export const addToCartUseCase = buildAddToCart(cartRepository);
export const cartsUseCase = buildCarts(cartRepository);
