const mongoose = require("mongoose");
const dotenv = require("dotenv");

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
