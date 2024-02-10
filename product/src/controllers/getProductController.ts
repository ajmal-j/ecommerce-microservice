import { getProduct } from "../useCase/index";
import { TODO } from "../utils/types";

export function getProductController(req: TODO) {
  console.log(req.query);
  return getProduct(req.query);
}
