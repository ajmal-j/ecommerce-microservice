import { buildUserRepo } from "./repository/userRepository";
import { userModel as db } from "./model/user.model";

export const userRepository = buildUserRepo({ db });
