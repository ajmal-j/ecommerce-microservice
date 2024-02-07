import { buildProductRepo } from "./repository/productRepo";
import { productModel as db } from "./model/product.model";

export const productRepository = buildProductRepo({ db });

export type ProductRepoType = typeof productRepository;
