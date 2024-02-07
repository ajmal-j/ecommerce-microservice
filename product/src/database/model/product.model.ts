import mongoose, { Document, InferSchemaType, Model } from "mongoose";

export type ProductObjectType = {
  title: string;
  images: string[];
  description: string;
  price: number;
  isDeleted: boolean;
};

export interface ProductDocument extends Document, ProductObjectType {}

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
      type: Array,
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
  InferSchemaType<typeof productSchema>;

export const productModel: Model<ProductType> = mongoose.model<ProductType>(
  "Product",
  productSchema
);

export type DocumentType = typeof Model;
