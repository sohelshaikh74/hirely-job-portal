import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with URI:", process.env.CON_STR); // Log the URI
    await mongoose.connect(process.env.CON_STR, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout for server selection
    });
    console.log("MongoDB connected successfully**");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};

export default connectDB;
