import { UserRepositoryType } from "../database";
import { TokenType } from "../utils/token";

export default function currentUserBuild(
  userRepository: UserRepositoryType,
  tokenFunc: TokenType
) {
  return async function currentUser(token: string) {
    let validatedToken = tokenFunc.validateToken(token);
    const id = await tokenFunc.decodeToken(validatedToken);
    if (!id) throw new Error("Id is missing in auth");
    return await userRepository.findById(id!);
  };
}
