import express from "express";
import makeCallback from "../utils/expressCallback";

export default (addToCartController, getCartController) => {
  const router = express.Router();

  router.post("/add", makeCallback(addToCartController));
  router.get("/carts", makeCallback(getCartController));

  return router;
};
