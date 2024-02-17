import { deleteProductController } from "./deleteProductController";
import { makeProductController } from "./makeProductController";
import { getProductsController } from "./getProductsController";
import { getProductController } from "./getProductController";
import editProductController from "./editProduct-Controller";

export const productController = {
  deleteProductController,
  makeProductController,
  getProductController,
  getProductsController,
  editProductController
};

export type productControllerType = typeof productController;
