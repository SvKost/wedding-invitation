import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

if(!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  
  const db = await mongoose.connect(process.env.MONGODB_URI!);
  connection.isConnected = db.connections[0].readyState;
  
}

export default dbConnect;