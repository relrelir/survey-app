import mongoose, { Schema, ObjectId } from "mongoose";
import Question from "./question";
import User from "./user";

export const QuestionarieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  introduction: {
    type: String,
    required: false,
  },

  questions: [
    {
      type: ObjectId,
      ref: Question,
    },
  ],
  pointsValue: {
    type: Number,
    default: 0,
  },
  author: {
    type: ObjectId,
    ref: User,
    // autopopulate: true,
  },
});

// schema.plugin(require('mongoose-autopopulate'));

const Questionarie =
  mongoose.models.Questionarie ||
  mongoose.model("Questionarie", QuestionarieSchema);
export default Questionarie;
