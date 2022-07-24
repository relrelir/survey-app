import mongoose, { Schema, ObjectId } from "mongoose";
import VerificationToken from "./verification-token";
import messege from "./messege";
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
    unique: true,
  },
  image: {
    type: String,
    required: false,
  },
  emailVerified: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ["user", "editor", "admin", "superAdmin"],
    required: false,
    default: "user",
  },
  gender: {
    type: String,
    enum: ["none", "male", "female", "other"],
    required: false,
    default: "none",
  },
  phone: {
    type: String,
    required: false,
    default: null,
  },
  birthday: {
    type: String,
    required: false,
    default: null,
  },
  points: {
    type: Number,
    default: 0,
    // max: 100,
  },
  messeges: [
    {
      type: ObjectId,
      ref: messege,
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
