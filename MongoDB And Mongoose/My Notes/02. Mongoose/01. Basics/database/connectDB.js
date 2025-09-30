import mongoose from "mongoose";
const connectDB = async (DATABASE_URL) => {
  try {
    // this mongoose.connect() lets you connect to your database
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected...");
  } catch (error) {
    console.log(error);
  }
};

// this lets you export database and use in other files
export default connectDB;
