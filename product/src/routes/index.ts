import { buildProductRoutes } from "./productRoutes";
import { deleteProductController } from "../controllers/deleteProductController";
import { makeProductController } from "../controllers/makeProductController";
import { getProductsController } from "../controllers/getProductsController";
import { getProductController } from "../controllers/getProductController";

export const productRoutes = buildProductRoutes({
  deleteProductController,
  makeProductController,
  getProductController,
  getProductsController,
});
