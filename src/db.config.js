import mongoose from "mongoose";

export const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("DB connected succesfully"))
    .catch((err) => console.log("Error connecting to MongoDB", err.message));
};