import { addToCart } from "../cart";

export default (cartRepository) => {
  return async ({ userId, product }) => {
    const data = addToCart(userId, product);
    if (!data) throw new Error("Dada is invalid");
    console.log("inside the useCase");
    return await cartRepository.add(data);
  };
};
