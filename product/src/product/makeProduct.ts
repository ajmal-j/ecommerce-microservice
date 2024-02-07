import { ProductObjectType } from "../database/model/product.model";
export function buildMakeProduct() {
  return function createProduct({
    title,
    description,
    images,
    price,
  }: ProductObjectType) {
    if (!title || !description) throw new Error("Invalid data");
    if (price < 1) throw new Error("Invalid price");
    if (images.length < 1) throw new Error("Add at least one image");

    return Object.freeze({
      title,
      description,
      images,
      price,
    });
  };
}
