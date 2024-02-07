import { deleteProductController } from "./deleteProductController";
import { makeProductController } from "./makeProductController";
import { getProductsController } from "./getProductsController";
import { getProductController } from "./getProductController";

export const productController = {
  deleteProductController,
  makeProductController,
  getProductController,
  getProductsController,
};

export type productControllerType = typeof productController;
