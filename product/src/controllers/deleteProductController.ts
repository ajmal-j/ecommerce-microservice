import { deleteProduct } from "../useCase/index";
import { TODO } from "../utils/types";

export function deleteProductController(req: TODO) {
  return deleteProduct(req.body);
}
