import mongoose, { Schema, ObjectId } from "mongoose";
import User from "./user";

export const AnswerSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    default: true,
  },
  pointsValue: {
    type: Number,
    default: 0,
  },
  users: [
    {
      type: ObjectId,
      ref: User,
    },
  ],
});

export default mongoose.models.Answer || mongoose.model("Answer", AnswerSchema);
