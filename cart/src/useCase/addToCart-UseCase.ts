import { addToCart } from "../cart";
import { cartRepoType } from "../database";

export default (cartRepository: cartRepoType) => {
  return async ({ userId, product }: { userId: string; product: object }) => {
    const data = addToCart(userId, product);
    if (!data) throw new Error("Dada is invalid");
    return await cartRepository.add(data);
  };
};
