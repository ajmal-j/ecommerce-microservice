import { logInUser } from "../auth";
import { UserType } from "../database/model/user.model";

type UserInput = {
  email: string;
  password: string;
};

export default function userLogInBuild({ userRepository }: any) {
  return async function userLogin(input: UserInput) {
    const userData: UserType = await userRepository.findByEmail(input.email);
    if (!userData) throw new Error("Invalid credentials");

    return await logInUser({ input, userData });
  };
}
