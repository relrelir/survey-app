import mongoose, { Schema, ObjectId } from "mongoose";
import User from "./user";

export const MessageSchema = new Schema({
  sentBy: {
    type: ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
