import express from "express";
import makeCallback from "../utils/expressCallback";
import { cartsUseCase, deleteUseCase } from "../useCase/index";

export default () => {
  const router = express.Router();

  router.post(
    "/add",
    makeCallback((req: any) => {})
  );
  router.delete(
    "/delete",
    makeCallback((req: any) => {
      return deleteUseCase(req?.body);
    })
  );
  router.post(
    "/carts",
    makeCallback((req: any) => {
      return cartsUseCase(req?.body?.id);
    })
  );

  return router;
};
