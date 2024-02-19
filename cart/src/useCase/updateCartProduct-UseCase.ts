import { cartRepoType } from "../database";

export default (cartRepository: cartRepoType) => {
  return async (product: {}) => {
    await cartRepository.updateProduct({ product });
  };
};
