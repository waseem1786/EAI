import mongoose, { Schema } from "mongoose";

export type Segment = { start: number; end: number };
export type VideoProgressDoc = {
  userId: string;
  videoId: string;
  lastPositionSeconds: number;
  watchedSecondsTotal: number;
  durationSeconds: number;
  segments: Segment[];
  updatedAt: Date;
};

const SegmentSchema = new Schema<Segment>({ start: Number, end: Number }, { _id: false });

const VideoProgressSchema = new Schema<VideoProgressDoc>(
  {
    userId: { type: String, required: true, index: true },
    videoId: { type: String, required: true, index: true },
    lastPositionSeconds: { type: Number, required: true, default: 0 },
    watchedSecondsTotal: { type: Number, required: true, default: 0 },
    durationSeconds: { type: Number, required: true, default: 0 },
    segments: { type: [SegmentSchema], required: true, default: [] }
  },
  { timestamps: true }
);

VideoProgressSchema.index({ userId: 1, videoId: 1 }, { unique: true });

export const VideoProgress = mongoose.models.VideoProgress || mongoose.model<VideoProgressDoc>("VideoProgress", VideoProgressSchema);
