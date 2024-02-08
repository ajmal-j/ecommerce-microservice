import mongoose, { Document } from "mongoose";

export type UserObjectType = {
  email: string;
  password: string;
  name: string;
};

export interface UserType extends Document, UserObjectType {
  _id: string;
}

const userSchema = new mongoose.Schema<UserObjectType>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model<UserObjectType, UserType>(
  "User",
  userSchema
);

export type DocumentType = typeof userModel;
