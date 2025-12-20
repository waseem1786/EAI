import mongoose, { Schema } from "mongoose";

export type TaskStatusDoc = {
  userId: string;
  taskId: string;
  status: "todo" | "doing" | "done";
  updatedAt: Date;
};

const TaskStatusSchema = new Schema<TaskStatusDoc>(
  {
    userId: { type: String, required: true, index: true },
    taskId: { type: String, required: true, index: true },
    status: { type: String, required: true, enum: ["todo", "doing", "done"], default: "todo" },
  },
  { timestamps: true }
);

// unique per user + task
TaskStatusSchema.index({ userId: 1, taskId: 1 }, { unique: true });

export const TaskStatus = mongoose.models.TaskStatus || mongoose.model<TaskStatusDoc>("TaskStatus", TaskStatusSchema);
