import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import User from "./user";

export const AnswerSchema = new Schema({
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

const Answer = mongoose.models.Answer || mongoose.model("Answer", AnswerSchema);
export default Answer;
