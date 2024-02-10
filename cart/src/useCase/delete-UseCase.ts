import { cartRepoType } from "../database";

export default (cartRepository: cartRepoType) => {
  return async ({
    userId,
    productId,
  }: {
    userId: string;
    productId: string;
  }) => {
    if (!userId || !productId)
      throw new Error(`${userId ? productId : userId} missing.`);
    return await cartRepository.delete({ userId, productId });
  };
};
