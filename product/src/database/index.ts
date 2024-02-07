import { buildProductRepo } from "./repository/productRepo";
import { productModel as db } from "./model/product.model";

export const userRepository = buildProductRepo({ db });
