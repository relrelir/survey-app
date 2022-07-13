import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questionarie = new Schema({
  // author: { type: Schema.Types.ObjectId },
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: false,
  },
  // question: {
  //   type: Array,
  //   required: true,
  // },
  pointsValue: {
    type: Number,
    default: 0,
  },
  // question: {
  //   type: Schema.Types.ObjectId,
  //   ref: Question,
  // },
});

mongoose.models = {};

const Questionarie = mongoose.model("Questionarie", questionarie);

export default Questionarie;
