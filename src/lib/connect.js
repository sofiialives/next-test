import mongoose from "mongoose";

const connection = {};

export const connect = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connection already exists");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection.readyState;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
