import mongoose from "mongoose";

const { Schema } = mongoose;

const alert = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const Alert = mongoose.model("Alert", alert);

export default Alert;
