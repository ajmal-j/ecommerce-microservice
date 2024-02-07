import { ProductObjectType, DocumentType } from "../model/product.model";

export function buildProductRepo({ db }: { db: DocumentType }) {
  return Object.freeze({
    async add(productData: ProductObjectType) {
      return await db.create(productData);
    },
    async getProducts() {
      return await db.find();
    },
    async getProduct(id: string) {
      return await db.findById(id);
    },
    async delete(id: string) {
      return await db.findByIdAndDelete(id);
    },
  });
}
