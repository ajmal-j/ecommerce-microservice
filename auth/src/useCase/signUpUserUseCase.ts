import { makeUser } from "../auth";

export default function buildSignUpUser({ userRepository }: any) {
  return async function userSignUp(userData: {
    email: string;
    password: string;
    name: string;
  }) {
    const userExist = await userRepository.findByEmail(userData.email);
    if (userExist) throw new Error("Email already in use.");

    const user = await makeUser(userData);
    return await userRepository.add(user);
  };
}
