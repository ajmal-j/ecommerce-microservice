import buildAddToCart from "./addToCart-UseCase";

import { cartRepository } from "../database/index";

export const addToCartUseCase = buildAddToCart(cartRepository);
