import { userSignUp } from "../useCase/index";

export const signUpController = async (req: any) => {
  return await userSignUp(req.body);
};
