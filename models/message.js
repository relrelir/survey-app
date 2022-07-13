import mongoose from "mongoose";
import User from "./user";

const { Schema } = mongoose;

const message = new Schema({
  sentBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
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

const Message = mongoose.model("Message", message);

export default Message;
