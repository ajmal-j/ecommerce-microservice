import { allUsers } from "../useCase";

export const usersController = async () => {
  return await allUsers();
};
