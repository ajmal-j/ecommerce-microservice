import { userLogIn } from "../useCase";

export const logInController = async (req: any) => {
  return await userLogIn(req.body);
};
