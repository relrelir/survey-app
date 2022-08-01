import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import Answer from "./answer";

export const QuestionSchema = new Schema({
  title: {
    type: String,
    required: true,
    // minLength: 2,
  },
  introduction: {
    type: String,
    required: false,
  },
  isMultiChoise: {
    type: Boolean,
    default: true,
  },
  answers: [
    {
      type: ObjectId,
      ref: Answer,
    },
  ],
});

const Question =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);

export default Question;
