import mongoose, { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to database MongoDB ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
