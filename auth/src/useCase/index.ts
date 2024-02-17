import userLogInBuild from "./logInUser-UseCase";
import { userRepository } from "../database/index";
import buildSignUpUser from "./signUpUser-UseCase";
import currentUserBuild from "./currentUser-UseCase";
import userBuild from "./users-Usecase";
import * as tokenFunc from "../utils/token";

export const userLogIn = userLogInBuild(userRepository);
export const userSignUp = buildSignUpUser(userRepository);
export const currentUser = currentUserBuild(userRepository, tokenFunc);
export const allUsers = userBuild(userRepository);
