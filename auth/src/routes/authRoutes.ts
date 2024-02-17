import express from "express";
import makeCallback from "../utils/expressCallback";

export default ({
  logInController,
  signUpController,
  currentUserController,
  usersController,
}: any) => {
  const router = express.Router();

  router.post("/login", makeCallback(logInController));
  router.post("/signup", makeCallback(signUpController));
  router.get("/current-user", makeCallback(currentUserController));
  router.get("/users", makeCallback(usersController));
  return router;
};
