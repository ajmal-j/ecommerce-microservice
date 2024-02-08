import userLogInBuild from "./logInUserUseCase";
import { userRepository } from "../database/index";
import buildSignUpUser from "./signUpUserUseCase";

export const userLogIn = userLogInBuild( userRepository );
export const userSignUp = buildSignUpUser( userRepository );
