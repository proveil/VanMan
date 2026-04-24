import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO DB CONNECTION: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MONGODB CONFIG: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
