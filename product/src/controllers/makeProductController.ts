import { addProduct } from "../useCase/index";
import { TODO } from "../utils/types";

export function makeProductController(req: TODO) {
  return addProduct(req.body);
}
