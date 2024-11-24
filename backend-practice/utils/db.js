import mongoose from "mongoose";
import dotenv from "dotenv";
// dotenv.config({paht:'../confing.env'})
dotenv.config();

// console.log(process.env);

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with URI:", process.env.CONN_STR); // Log the URI
    await mongoose.connect(process.env.CONN_STR);
    console.log("MongoDB connected successfully***");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectDB;
