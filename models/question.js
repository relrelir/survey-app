import mongoose, { Schema, ObjectId } from "mongoose";

export const QuestionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: false,
  },
  answers: {
    type: ObjectId,
    ref: "Answers",
  },
});

const Question =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);

export default Question;
