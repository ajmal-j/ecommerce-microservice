import express from "express";
import makeCallback from "../utils/expressCallback";

export default ({ logInController, signUpController }: any) => {
  const router = express.Router();

  router.post("/login", makeCallback(logInController));
  router.post("/signup", makeCallback(signUpController));
  return router;
};
