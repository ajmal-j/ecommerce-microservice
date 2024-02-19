import { getProduct } from "../useCase/index";
import { TODO } from "../utils/types";

export function getProductController(req: TODO) {
  return getProduct(req.query);
}
