import mongoose from "mongoose";
export const connect = async (url: string) => {
  try {
    if (!url) throw new Error("Mongo url is missing");
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    console.log("error while connecting to MongoDB");
  }
};
