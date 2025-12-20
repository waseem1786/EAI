import mongoose, { Schema } from "mongoose";
export type TimelineEventDoc = { userId: string; videoId: string; taskId: string; type: string; data?: any; createdAt: Date; };

const TimelineEventSchema = new Schema<TimelineEventDoc>(
  {
    userId: { type: String, required: true, index: true },
    videoId: { type: String, required: true, index: true },
    taskId: { type: String, required: true },
    type: { type: String, required: true },
    data: { type: Schema.Types.Mixed }
  },
  { timestamps: true }
);

export const TimelineEvent = mongoose.models.TimelineEvent || mongoose.model<TimelineEventDoc>("TimelineEvent", TimelineEventSchema);
