import mongoose from "mongoose";

export const mongoConnection = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    if (mongoose.connection.readyState >= 1) {
      return; // Use existing connection
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
