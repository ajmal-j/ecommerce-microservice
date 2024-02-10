import express from "express";
import makeCallback from "../utils/expressCallback";
import { productControllerType } from "../controllers";
import { TODO } from "../utils/types";
import { addToCart } from "../useCase";

export function buildProductRoutes({
  deleteProductController,
  makeProductController,
  getProductController,
  getProductsController,
  verifyUser,
}: productControllerType & { verifyUser: TODO }) {
  const router = express.Router();

  router.post("/add", makeCallback(makeProductController));
  router.delete("/delete", makeCallback(deleteProductController));
  router.get("/product", makeCallback(getProductController));
  router.get("/products", makeCallback(getProductsController));
  router.post(
    "/addToCart",
    makeCallback(async (req: TODO) => {
      const response = await verifyUser(req);
      if (response === undefined)
        throw new Error(response?.message ?? "No user");
      return await addToCart({
        productId: req?.body?.data?.id,
        userId: response?._id,
      });
    })
  );
  return router;
}
