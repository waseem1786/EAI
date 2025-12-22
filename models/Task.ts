import mongoose, { Schema, models, model } from "mongoose";

const taskSchema = new Schema({
  id: { type: String, required: true, unique: true },
  day: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  estimatedMinutes: { type: Number, required: true },
  videoId: { type: String, required: true },
  url: { type: String, required: true },
  lessonText: { type: String, required: true },
  status: { type: String, required: true, default: "todo" },
});

export const Task = models.Task || model("Task", taskSchema);
