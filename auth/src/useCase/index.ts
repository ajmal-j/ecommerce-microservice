import userLogInBuild from "./logInUser-UseCase";
import { userRepository } from "../database/index";
import buildSignUpUser from "./signUpUser-UseCase";
import currentUserBuild from "./currentUser-UseCase";
import * as tokenFunc from "../utils/token";

export const userLogIn = userLogInBuild(userRepository);
export const userSignUp = buildSignUpUser(userRepository);
export const currentUser = currentUserBuild(userRepository, tokenFunc);
