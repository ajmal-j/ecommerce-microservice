import { addToCart } from "../cart";

export default (cartRepository: any) => {
  return async ({ userId, product }: { userId: string; product: object }) => {
    const data = addToCart(userId, product);
    if (!data) throw new Error("Dada is invalid");
    console.log("inside the useCase");
    return await cartRepository.add(data);
  };
};
