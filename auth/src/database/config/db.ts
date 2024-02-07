import mongoose from "mongoose";

export const connect = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error while mongoConnection");
    console.log(error, "URL : ", url);
  }
};
