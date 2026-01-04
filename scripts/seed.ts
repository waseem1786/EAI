import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config(); // Fallback to .env
import { dbConnect } from "../lib/db";
import { Task } from "../models/Task";
import TASKS from "./tasks.json";

async function seed() {
  await dbConnect();
  console.log("Connected to database");

  await Task.deleteMany({});
  console.log("Cleared existing tasks");

  await Task.insertMany(TASKS);
  console.log("Inserted new tasks");

  await mongoose.disconnect();
  console.log("Disconnected from database");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
