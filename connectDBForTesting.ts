import mongoose from "mongoose";
const dotenv = require('dotenv-flow');
dotenv.config();

export async function connectDBForTesting() {
  try {
    const dbUri = `${process.env.DATABASE}`;
    const dbName = "test";
    await mongoose.connect(dbUri, {
      dbName,
      autoCreate: true,
    });
  } catch (error) {
    console.log("DB connect error");
  }
}


export async function disconnectDBForTesting() {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log("DB disconnect error");
  }
}
