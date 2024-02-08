import { logInUser } from "../auth";
import { UserRepositoryType } from "../database";
import { UserType } from "../database/model/user.model";

type UserInput = {
  email: string;
  password: string;
};

export default function userLogInBuild(userRepository: UserRepositoryType) {
  return async function userLogin(input: UserInput) {
    const userData: UserType = await userRepository.findByEmail(input.email);
    if (!userData) throw new Error("Invalid credentials");

    return await logInUser({ input, userData });
  };
}
