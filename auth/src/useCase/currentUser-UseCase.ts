import { UserRepositoryType } from "../database";
import { TokenType } from "../utils/token";

export default function currentUserBuild(
  userRepository: UserRepositoryType,
  tokenFunc: TokenType
) {
  return async function currentUser(token: string) {
    const id = await tokenFunc.decodeToken(token);
    if (!id) throw new Error("Id is missing in auth");
    return await userRepository.findById(id!);
  };
}
