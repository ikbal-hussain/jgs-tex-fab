const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
  try {
    const uri = process.env.uri
    await mongoose.connect(uri);
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
