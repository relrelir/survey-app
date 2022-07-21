import mongoose, { Schema, ObjectId } from "mongoose";

export const QuestionSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  areOptions: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: false,
  },
  answers: {
    type: Schema.Types.ObjectId,
    ref: "Answers",
  },
});

const Question =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);

export default Question;
