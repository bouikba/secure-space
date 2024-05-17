import mongoose from "mongoose";

// Connect to MongoDB
export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}