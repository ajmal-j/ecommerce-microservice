import express from "express";
import makeCallback from "../utils/expressCallback";
import cartsUseCase from "../useCase/carts-UseCase";

export default () => {
  const router = express.Router();

  router.post(
    "/add",
    makeCallback((req: any) => {})
  );
  router.get(
    "/carts",
    makeCallback((req: any) => {
      return cartsUseCase(req?.body?.id);
    })
  );

  return router;
};
