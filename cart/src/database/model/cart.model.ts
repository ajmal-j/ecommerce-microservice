import mongoose, { Document, InferSchemaType } from "mongoose";

export interface CartObjectType {
  userId: string;
  product: Object;
}

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export interface ProductType
  extends Document,
    InferSchemaType<typeof cartSchema> {
  _id: string;
}

export const CartModel = mongoose.model<ProductType>("Cart", cartSchema);
