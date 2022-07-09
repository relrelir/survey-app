import mongoose from "mongoose";
import Questionarie from "./questionarie";
const Schema = mongoose.Schema;

const user = new Schema({
  userName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male" || "Female" || "Other"],
  },
  eMail: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: Messege,
    },
  ],

  alerts: [
    {
      type: Schema.Types.ObjectId,
      ref: Alert,
    },
  ],
  questionaries: {
    type: Schema.Types.ObjectId,
    ref: Questionarie,
  },
});

mongoose.models = {};

const User = mongoose.model("User", user);

export default User;
