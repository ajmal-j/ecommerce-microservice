import mongoose, { Document, InferSchemaType, Model } from "mongoose";

export type ProductObjectType = {
  title: string;
  images: string[];
  description: string;
  price: number;
  isDeleted?: boolean;
};

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export type ProductType = { _id: string } & Document &
  InferSchemaType<typeof productSchema> &
  ProductObjectType;

export const productModel = mongoose.model<ProductType>(
  "Product",
  productSchema
);
export type DocumentType = typeof Model<ProductType>;
