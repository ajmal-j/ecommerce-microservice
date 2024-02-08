import { UserRepositoryType } from "../database";
import { UserType } from "../database/model/user.model";
import { TokenType } from "../utils/token";

type UserInput = {
  email: string;
  password: string;
};

export default function currentUserBuild(
  userRepository: UserRepositoryType,
  tokenFunc: TokenType
) {
  return async function currentUser(token: string) {
    let validatedToken = tokenFunc.validateToken(token);
    const _id = await tokenFunc.decodeToken(validatedToken);
    return await userRepository.findById(_id!);
  };
}
