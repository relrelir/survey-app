import mongoose, { Schema, ObjectId } from "mongoose";
import User from "./user";

export const AnswerSchema = new Schema({
  areOptions: {
    type: Boolean,
    default: true,
  },
  content: {
    type: String,
    required: false,
  },
  isCorrect: {
    type: Boolean,
    default: false,
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
