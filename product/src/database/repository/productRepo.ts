import mongoose from "mongoose";
import { ProductObjectType, DocumentType } from "../model/product.model";

export function buildProductRepo(db: DocumentType) {
  return Object.freeze({
    async add(productData: ProductObjectType) {
      return await db.create(productData);
    },
    async getProducts() {
      return await db.find();
    },
    async getProduct(id: string) {
      const objectId = this.makeObjectId(id);
      return await db.findById(objectId);
    },
    async delete(id: string) {
      const objectId = this.makeObjectId(id);
      return await db.findByIdAndDelete(objectId);
    },
    async getProductByName(title: string) {
      return await db.findOne({ title });
    },
    async updateProduct({ id, product }: { id: string; product: {} }) {
      return await db.findByIdAndUpdate(id, product, { new: true });
    },
    makeObjectId(id: string) {
      return new mongoose.Types.ObjectId(id);
    },
  });
}
