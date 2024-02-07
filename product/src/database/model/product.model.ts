import mongoose, { Document, InferSchemaType } from "mongoose";

export type ProductObjectType = {
  title: string;
  image: { url: string[] };
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
    image: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
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

export const userModel = mongoose.model<ProductType>("Product", productSchema);

export type DocumentType = typeof userModel;
