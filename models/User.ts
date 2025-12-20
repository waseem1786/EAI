import mongoose, { Schema } from "mongoose";
export type UserDoc = { email: string; passwordHash: string; createdAt: Date };

const UserSchema = new Schema<UserDoc>(
  { email: { type: String, required: true, unique: true, index: true }, passwordHash: { type: String, required: true } },
  { timestamps: true }
);
export const User = mongoose.models.User || mongoose.model<UserDoc>("User", UserSchema);
