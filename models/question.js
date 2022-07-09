import mongoose from "mongoose";

const { Schema } = mongoose;

const question = new Schema({
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
    ref: Answers,
  },
});

mongoose.models = {};

const Question = mongoose.model("Question", question);

export default Question;
