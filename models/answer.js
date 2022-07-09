import mongoose from "mongoose";
import User from "./user";

const { Schema } = mongoose;

const answer = new Schema({
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
      type: Schema.Types.ObjectId,
      ref: User.ObjectId,
    },
  ],
});

mongoose.models = {};

const Answer = mongoose.model("Answer", answer);

export default Answer;
