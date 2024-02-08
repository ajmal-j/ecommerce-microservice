import mongoose from "mongoose";

export const connect = async (url: string) => {
  try {
    console.log(url)
    await mongoose.connect(url);
    console.log("MongoDB connected.");
  } catch (error) {
    console.log("Error while connecting mongoDB");
    console.log(error, "URL : ", url);
  }
};
