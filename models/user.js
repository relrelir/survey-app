import mongoose, { Schema, ObjectId } from "mongoose";
import VerificationToken from "./verification-token";
import Message from "./message";
import Alert from "./alert";
// import Questionarie from "./questionarie";

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    // unique: true,
  },
  image: {
    type: String,
    required: false,
  },
  emailVerified: {
    type: Date,
    required: false,
  },
  role: {
    type: String,
    enum: ["user", "editor", "moderator", "admin"],
    required: false,
  },
  gender: {
    type: String,
    enum: ["none", "male", "female", "other"],
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  birthday: {
    type: Date,
    required: false,
  },
  points: {
    type: Number,
    default: 0,
  },
  messages: [
    {
      type: ObjectId,
      ref: Message,
    },
  ],
  alerts: [
    {
      type: ObjectId,
      ref: Alert,
    },
  ],
});
UserSchema.virtual("questionaries", {
  ref: "Questionarie",
  localField: "_id",
  foreignField: "author",
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
