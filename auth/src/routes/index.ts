import makeAuthRoutes from "./authRoutes";
import { logInController } from "../controller/logIn-Controller";
import { signUpController } from "../controller/signUp-Controller";
import { currentUserController } from "../controller/currentUser-Controller";

export default makeAuthRoutes({
  logInController,
  signUpController,
  currentUserController,
});
