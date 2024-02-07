import makeAuthRoutes from "./authRoutes";
import { logInController } from "../controller/logInController";
import { signUpController } from "../controller/signUpController";

export default makeAuthRoutes({
  logInController,
  signUpController,
});
