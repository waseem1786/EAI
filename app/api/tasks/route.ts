import { NextResponse } from "next/server";
import { dbConnect } from "../../../lib/db";
import { Task } from "../../../models/Task";

export async function GET() {
  await dbConnect();
  const tasks = await Task.find({}).sort({ day: 1 });
  return NextResponse.json({ tasks });
}
