import express from "express";
import makeCallback from "../utils/expressCallback";
import { productControllerType } from "../controllers";

export function buildProductRoutes({
  deleteProductController,
  makeProductController,
  getProductController,
  getProductsController,
}: productControllerType) {
  const router = express.Router();

  router.post("/add", makeCallback(makeProductController));
  router.delete("/delete", makeCallback(deleteProductController));
  router.get("/product", makeCallback(getProductController));
  router.get("/products", makeCallback(getProductsController));

  return router;
}
