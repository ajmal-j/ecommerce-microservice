import { buildProductRoutes } from "./productRoutes";
import { deleteProductController } from "../controllers/deleteProductController";
import { makeProductController } from "../controllers/makeProductController";
import { getProductsController } from "../controllers/getProductsController";
import { getProductController } from "../controllers/getProductController";
import { verifyUser } from "../utils/verifyUser";

export const productRoutes = buildProductRoutes({
  deleteProductController,
  makeProductController,
  getProductController,
  getProductsController,
  verifyUser,
});
