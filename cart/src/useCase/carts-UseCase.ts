import { cartRepoType } from "../database";

export default (cartRepository: cartRepoType) => {
  return async (id: string) => {
    return await cartRepository.getAll(id);
  };
};
